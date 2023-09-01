// NAV COMPONENT //

import RightNav from "./RightNav";
import Burger from "./Burger";
import { useState } from "react";
import { Link } from "react-router-dom";

import '../../images/logo-white.png'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const location = window.location.pathname;
  let navClass;

  const openNav = () => {
    setOpen(!open)
  }
  
  if (location === '/shopping-bag' || location === '/checkout') {
    navClass = "nav__header-bag"
  } else {
    navClass = "nav__header"
  }

  return (
    <div className="nav">
      <div className={navClass}>
        <Link to='/'><img src={require('../../images/logo-white.png')} alt="logo" className="nav__logo"/></Link>
        <Burger openNav={openNav}/>    
      </div>
      <div className="nav__links">
        {open && <RightNav openNav={openNav}/>}
      </div>
    </div>
  )
}

export default Nav;