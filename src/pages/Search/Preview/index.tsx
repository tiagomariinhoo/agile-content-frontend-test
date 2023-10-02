import { useState } from "react"

import "./styles.css"
import { Result } from '../../../types/index'

interface PreviewProps {
  result: Result;
  onSelectItem: (value: Result | null) => void;
}

const Preview: React.FC<PreviewProps> = ({ result, onSelectItem }) => {
  const [loaded, setLoaded] = useState(false)

  const handleClickContent = (evt) => {
    evt.stopPropagation()
  }

  const handleClickOutside = () => {
    onSelectItem(null)
  }

  return (
    <div className="preview-modal" onClick={handleClickOutside} style={{ display: loaded ? 'block' : 'none' }}>
      <div className="preview-modal-content" onClick={handleClickContent}>
        <img src={result.image} onLoad={() => setLoaded(true)} />
        <span className="preview-url">{result.url}</span>
        <h4 className="preview-title">{result.title}</h4>
        <span className="preview-description">{result.description}</span>
      </div>
    </div>
  )
}

export default Preview