// NAV COMPONENT //

import RightNav from "./RightNav";
import { useState } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false)
  
  const openNav = () => {
    setOpen(!open)
  }

  return (
    <div className="nav">
      <div className="nav__header"></div>
        <h1>EverUse</h1>
        <div className="burger" onClick={openNav}>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
        <div className="burger__line"></div>
      </div>
      <div className="nav__links">
        {open && <RightNav />}
      </div>
    </div>
  )
}

export default Nav;