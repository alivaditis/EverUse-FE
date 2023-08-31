// NAV COMPONENT //

import RightNav from "./RightNav";
import { useState } from "react";
import '../../images/logo-white.png'

const Nav = () => {
  const [open, setOpen] = useState(false)
  
  const openNav = () => {
    setOpen(!open)
  }

  return (
    <div className="nav">
      <div className="nav__header">
        <img src={require('../../images/logo-white.png')} alt="logo" className="nav__logo"/>
        <div className="burger" onClick={openNav}>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
          <div className="burger__line"></div>
        </div>      
      </div>
      <div className="nav__links">
        {open && <RightNav openNav={openNav}/>}
      </div>
    </div>
  )
}

export default Nav;