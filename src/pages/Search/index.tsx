import { useState } from 'react'
import { useSearchParams } from "react-router-dom"
import "./styles.css"
import data from '../../services/api'
import Results from './components/Results'
import Preview from './components/Preview'

const Search = () => {
  const [selectedItem, setSelectedItem] = useState()

  return (
    <div className="search-page-container">
      <div className="wrapper">
        <Results results={data} onSelect={(result) => setSelectedItem(result)} />
        {
          selectedItem &&
          <div className="preview-container">
            <Preview item={selectedItem} />
          </div>
        }
      </div>
    </div>
  )
}

export default Search