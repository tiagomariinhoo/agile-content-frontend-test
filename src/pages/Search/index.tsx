import { useState, useEffect } from 'react'

import { Result, SearchState } from '../../types'
import { useSearch } from '../../hooks/search'
import LoadingState from './LoadingState'
import data from '../../services/api'
import Results from './Results'
import Preview from './Preview'
import EmptyState from './EmptyState'
import "./styles.css"

const Search = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<Result[]>([])
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const [previousText, setPreviousText] = useState('')
  const { text } = useSearch()


  const fetchData = async () => {
    await data().then((response) => {
      const animals: Result[] = response.filter((animal: Result) => animal.type === text || animal.title === text)
      setResults(animals)
      setPreviousText(text)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    setSelectedItem(null)
    fetchData()
  }, [text])

  return (
    <div className="search-page-container">
      <div className="wrapper">
        {
          (isLoading || previousText != text) ?
            <LoadingState /> :
            (text === "" || results.length == 0) ?
              <EmptyState
                state={text === "" ? SearchState.INVALID : SearchState.EMPTY} /> :
              <>
                <Results
                  results={results}
                  onSelect={(result: Result) => setSelectedItem(result)} />
                {
                  selectedItem &&
                  <Preview result={selectedItem} />
                }
              </>
        }
      </div>
    </div>
  )
}

export default Search