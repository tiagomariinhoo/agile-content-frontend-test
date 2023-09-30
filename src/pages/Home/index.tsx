import { useState } from "react"

import Input from "../../components/Input"
import "./styles.css"
import GoogleLogo from "../../assets/google_logo.svg"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const [text, setText] = useState("")
  const navigate = useNavigate()

  const handleSearch = () => {
    navigate({
      pathname: '/search',
      search: `?q=${text}`
    })
  }

  return (
    <div className="home-container">
      <img src={GoogleLogo} />
      <div className="search-container">
        <Input text={text} setText={setText} />
        <button onClick={handleSearch} disabled={text.length === 0} type="button" className="search-btn">Buscar</button>
      </div>
    </div>
  )
}

export default Home