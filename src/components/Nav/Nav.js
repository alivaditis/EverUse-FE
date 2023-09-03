// NAV COMPONENT //

import RightNav from "./RightNav";
import Burger from "./Burger";
import HomeNav from "./HomeNav";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../images/logo-white.png";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [navClass, setNavClass] = useState("nav__header");
  const [home, setHome] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);

  useEffect(() => {
    if (location === "/") {
      setNavClass("nav__header-landing");
    } else {
      setNavClass("nav__header");
    }
  }, [location]);

  const openNav = () => {
    setOpen(!open);
  };

  return (
    <div className="nav">
      <div className={navClass}>
        <Link to="/">
          <img
            src={require("../../images/logo-white.png")}
            alt="logo"
            className="nav__logo"
          />
        </Link>
        {home && <Burger openNav={openNav} />}
        {!home && <HomeNav />}
      </div>
      <div className="nav__links">{open && <RightNav openNav={openNav} />}</div>
    </div>
  );
};

export default Nav;
