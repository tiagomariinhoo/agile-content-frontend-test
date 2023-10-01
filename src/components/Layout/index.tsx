import { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import './styles.css'

import ProfilePic from "../../assets/profile_pic.jpg"
import GoogleLogo from "../../assets/google_logo.svg"
import Input from '../Input'

/**
 * TODO: Separate Header and Footer into components
 */

const Header = () => {
  const location = useLocation()
  const [text, setText] = useState<string>('')
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
    setText("")
    navigate({
      pathname: '/'
    })
  }

  const handlePressEnter = (evt) => {
    if (evt.key === 'Enter') {
      navigate({
        pathname: '/search',
        search: `?q=${text}`
      })
    }
  }

  return (
    <header>
      {
        !isSearchPage ?
        <span><strong>Agile Content</strong> Frontend test</span>
        :
        <div style={{display: "flex", alignItems: "center"}}>
          <img onClick={handleMainPage} style={{maxHeight: 30, marginRight: 18, cursor: 'pointer'}} src={GoogleLogo} />
          <Input style={{minHeight: 30}} onKeyPress={handlePressEnter} text={text} setText={setText}/>
        </div>
      }
      <div className="right-container">
        <div className="icon-wrap">
          <svg className="gb_i" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </div>
        <img className="profile-picture" src={ProfilePic} />
      </div>
    </header>
  )
}

const Footer = () => {
  console.log('Render2')
  return (
    <footer>
      <span><strong>© Google 2021</strong></span>
      <span>version: 0.1.0</span>
    </footer>
  )
}

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout