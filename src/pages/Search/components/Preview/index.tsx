import "./styles.css"

const Preview = ({ item }) => {

  return (
    <div className="preview-container">
      <img src={item.image} />
      <span className="preview-url">{item.url}</span>
      <h4 className="preview-title">{item.title}</h4>
      <span className="preview-description">{item.description}</span>
    </div>
  )
}

export default Preview