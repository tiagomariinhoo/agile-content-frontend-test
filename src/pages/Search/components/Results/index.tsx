import "./styles.css"



const Results = ({ results, onSelect }) => {

  const handleSelect = (result) => {
    onSelect(result)
  }

  return (
    <ul className="results-container">
      {
        results.map((result) => <>
          <li className="result-item" onClick={() => handleSelect(result)}>
            <a>{result.url}</a>
            <h4>{result.title}</h4>
            <span>{result.description}</span>
          </li>
        </>)
      }
    </ul>
  )
}

export default Results