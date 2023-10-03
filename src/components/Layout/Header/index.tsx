import { useMemo, useEffect, useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom"

import Input from '../../Input'
import ProfilePic from "../../../assets/profile_pic.jpg"
import GoogleLogo from "../../../assets/google_logo.svg"
import "./styles.css"

const Header = () => {
  const [text, setText] = useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const isSearchPage = useMemo(() => {
    if (location.pathname === '/search') return true
    return false
  }, [location.pathname])

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('q')
    if (query) {
      setText(query)
    }
  }, [location])


  const handleMainPage = () => {
    navigate({
      pathname: '/'
    })
  }

  const handlePressEnter = (evt) => {
    if (evt.key === 'Enter') {
      navigate({
        pathname: '/search',
        search: `?q=${evt.target.value}`
      })
    }
  }

  const handleChange = (evt) => {
    if (evt && evt.target) {
      setText(evt.target.value)
    }
  }

  return (
    <header>
      {
        !isSearchPage ?
          <span><strong>Agile Content</strong> Frontend test</span>
          :
          <div className='left-container'>
            <img className='google-logo' onClick={handleMainPage} src={GoogleLogo} />
            <Input style={{ minHeight: 30 }} value={text} onKeyPress={handlePressEnter} onChange={handleChange} />
          </div>
      }
      <div className={`right-container ${isSearchPage ? `is-search-page` : ``}`}>
        <div className="icon-wrap">
          <svg className="gb_i" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </div>
        <img className="profile-picture" src={ProfilePic} />
      </div>
    </header>
  )
}

export default Header