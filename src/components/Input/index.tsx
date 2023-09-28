import "./styles.css"
import SearchIcon from '../../assets/search_icon.svg'

const Input = () => {
  return (
    <div className="input-container">
      <img src={SearchIcon} />
      <input />
    </div>
  )
}

export default Input