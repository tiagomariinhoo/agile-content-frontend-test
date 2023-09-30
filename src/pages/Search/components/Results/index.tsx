import { useSearch } from "../../../../hooks/search"
import "./styles.css"

const 
Results = ({ results, onSelect }) => {
  const { isShowingPreview, setIsShowingPreview } = useSearch()

  const handleSelect = (result) => {
    onSelect(result)
    setIsShowingPreview(true)
  }

  return (
    <ul className={`results-container ${isShowingPreview ? `is-showing-preview` : ``}`}>
      {
        results.map((result, index) => 
        <li key={`result-${index}`} className="result-item">
            <a>{result.url}</a>
            <h3 onClick={() => handleSelect(result)}>{result.title}</h3>
            <span>{result.description}</span>
          </li>)
      }
    </ul>
  )
}

export default Results