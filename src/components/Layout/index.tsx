import { Outlet } from 'react-router-dom'
import './styles.css'

import ProfilePic from "../../assets/profile_pic.jpg"

/**
 * TODO: Separate Header and Footer into components
 */

const Header = () => {
  return (
    <header>
      <span><strong>Agile Content</strong> Frontend test</span>
      <div className="right-container">
        <div className="icon-wrap">
          <svg class="gb_i" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path></svg>
        </div>
        <img className="profile-picture" src={ProfilePic} />
      </div>
    </header>
  )
}

const Footer = () => {
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