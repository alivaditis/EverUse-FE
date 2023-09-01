// NAV COMPONENT //

import RightNav from "./RightNav";
import { useState } from "react";
import '../../images/logo-white.png'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const location = window.location.pathname;
  let navClass;

  const openNav = () => {
    setOpen(!open)
  }
  
  if (location === '/shopping-bag') {
    navClass = "nav__header-bag"
  } else {
    navClass = "nav__header"
  }

  return (
    <div className="nav">
      <div className={navClass}>
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