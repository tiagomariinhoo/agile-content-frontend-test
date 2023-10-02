import { useSearch } from "../../../hooks/search"
import { Result } from "../../../types"
import "./styles.css"

interface ResultProps {
  results: Result[];
  onSelect: (value: Result) => void;
}

const Results: React.FC<ResultProps> = ({ results, onSelect }) => {
  const { isShowingPreview, setIsShowingPreview } = useSearch()

  const handleSelect = (result: Result) => {
    onSelect(result)
    setIsShowingPreview(true)
  }

  return (
    <>
      <ul className={`results-container ${isShowingPreview ? `is-showing-preview` : ``}`}>
        {
          results.map((result, index) =>
            <li key={`result-${index}`} className="result-item">
              <>
                <a>{result.url}</a>
                <h3 onClick={() => handleSelect(result)}>{result.title}</h3>
                <span>{result.description}</span>
              </>
            </li>
          )
        }
      </ul>
    </>
  )
}

export default Results