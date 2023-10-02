import { useNavigate } from "react-router-dom"
import "./styles.css"

import Input from "../../components/Input"
import GoogleLogo from "../../assets/google_logo.svg"
import { useSearch } from "../../hooks/search"

const Home = () => {
  const { text, setText } = useSearch()
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate({
      pathname: '/search',
      search: `?q=${text}`
    })
  }

  const handlePressEnter = (evt) => {
    if (evt.key === 'Enter' && text !== "") {
      handleSearch()
    }
  }

  const handleChange = (evt) => {
    setText(evt.currentTarget.value)
  }

  return (
    <div className="home-container">
      <img src={GoogleLogo} />
      <div className="search-container">
        <Input onChange={handleChange} onKeyPress={handlePressEnter} />
        <button className="search-btn" onClick={handleSearch} disabled={text.length === 0} type="button" >Buscar</button>
      </div>
    </div>
  )
}

export default Home