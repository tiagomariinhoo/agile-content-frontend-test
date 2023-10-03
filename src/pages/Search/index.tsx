import { useState, useEffect } from 'react'

import { Result, SearchState } from '../../types'
import LoadingState from './LoadingState'
import data from '../../services/api'
import Results from './Results'
import Preview from './Preview'
import EmptyState from './EmptyState'
import './styles.css'
import { useLocation } from 'react-router-dom'

const Search = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<Result[]>([])
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const [previousText, setPreviousText] = useState<string | null>('')
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')?.toLowerCase()

  const fetchData = async () => {
    await data().then((response) => {
      const animals: Result[] = response.filter((animal: Result) => animal.type === query || animal.title === query)
      setResults(animals)
      setPreviousText(query)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    setSelectedItem(null)
    fetchData()
  }, [location])

  return (
    <div className='search-page-container'>
      <div className='search-content'>
        {
          (isLoading || previousText != query) ?
            <LoadingState /> :
            (query === '' || results.length == 0) ?
              <EmptyState
                state={query === '' ? SearchState.INVALID : SearchState.EMPTY} 
                text={query}/> :
              <>
                <Results
                  results={results}
                  onSelect={(result: Result) => setSelectedItem(result)} />
                {
                  selectedItem &&
                  <Preview result={selectedItem} onSelectItem={setSelectedItem}/>
                }
              </>
        }
      </div>
    </div>
  )
}

export default Search