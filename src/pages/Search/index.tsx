import { useState, useMemo } from 'react'
import { useLocation } from "react-router-dom"
import "./styles.css"
import data from '../../services/api'
import Results from './components/Results'
import Preview from './components/Preview'
import { Result } from '../../types'

const EmptyState = () => {
  return (
    <h1>Empty State</h1>
  )
}

const InvalidState = () => {
  return (
    <h1>Invalid State</h1>
  )
}

const Search = () => {
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')?.toLocaleLowerCase()
  const results = useMemo(() => {
    setSelectedItem(null)
    return data.filter((animal) => animal.type === query || animal.title === query)
  }, [location, data])

  return (
    <div className="search-page-container">
      <div className="wrapper">
        {
          query === "" ?
            <InvalidState /> :
            results.length == 0 ?
              <EmptyState /> :
              <>
                <Results results={results} onSelect={(result) => setSelectedItem(result)} />
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