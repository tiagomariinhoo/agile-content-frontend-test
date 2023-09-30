import "./styles.css"
import { Result } from '../../../../types/index'

interface PreviewProps {
  result: Result;
}

const Preview: React.FC<PreviewProps> = ({ result }) => {

  const handleClickContent = (evt) => {
    evt.stopPropagation()
  }

  return (
    <div className="preview-modal" onClick={() => console.log('onClick outside')}>
      <div className="preview-modal-content" onClick={handleClickContent}>
        <img src={result.image} />
        <span className="preview-url">{result.url}</span>
        <h4 className="preview-title">{result.title}</h4>
        <span className="preview-description">{result.description}</span>
      </div>
    </div>
  )
}

export default Preview