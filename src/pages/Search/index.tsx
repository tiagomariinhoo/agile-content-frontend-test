import { useState, useMemo, useEffect } from 'react'
import { useLocation } from "react-router-dom"
import "./styles.css"
import data from '../../services/api'
import Results from './components/Results'
import Preview from './components/Preview'
import { Result } from '../../types'
import LoadingState from './components/LoadingState'


// Refactor to use separated components and useContext to get the current search text
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
  const [isLoading, setIsLoading] = useState(true)
  const [results, setResults] = useState<Result[]>([])
  const [selectedItem, setSelectedItem] = useState<Result | null>()
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')?.toLocaleLowerCase()

  const fetchData = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setResults(data.filter((animal) => animal.type === query || animal.title === query))
    }, 1000)
  }

  useEffect(() => {
    setSelectedItem(null)
    fetchData()
  }, [location, query])

  return (
    <div className="search-page-container">
      <div className="wrapper">
        {
          isLoading ?
            <LoadingState /> :
            query === "" ?
              <InvalidState /> :
              results.length == 0 ?
                <EmptyState /> :
                <>
                  <Results results={results} onSelect={(result: Result) => setSelectedItem(result)} />
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