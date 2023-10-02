import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles.css"

import Input from "../../components/Input"
import GoogleLogo from "../../assets/google_logo.svg"

const Home = () => {
  const [text, setText] = useState('')
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

  const handleChange = (value) => {
    setText(value)
  }

  return (
    <div className="home-container">
      <img src={GoogleLogo} />
      <div className="search-container">
        <div className="input-wrapper">
          <Input value="" onChange={handleChange} onKeyPress={handlePressEnter} />
        </div>
        <button className="search-btn" onClick={handleSearch} disabled={text.length === 0} type="button" >Buscar</button>
      </div>
    </div>
  )
}

export default Home