import "./styles.css"

const Preview = ({ item }) => {

  return (
    <div style={{width: "100%"}}>
      <img style={{width: "100%"}} src={item.image} />
      <span>{item.url}</span>
      <h4>{item.title}</h4>
      <span>{item.description}</span>
    </div>
  )
}

export default Preview