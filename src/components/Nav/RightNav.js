import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Burger from "./Burger";

const RightNav = ({openNav}) => {
  const [home, setHome] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    if (location === '/') {
      setHome(true)
    } else {
      setHome(false)
    }
  }, [location])

  return (
    <>

    <ul>
      <button className="nav__close" onClick={openNav}>X</button>
      {!home && <li className="nav__link">
        <NavLink to="/">Home</NavLink>
      </li>}
      <li className="nav__link" onClick={openNav}>
        <HashLink smooth to="/#products">
          Shop
        </HashLink>
      </li>
      <li className="nav__link" onClick={openNav}>
        <HashLink smooth to="/#about" className="nav__about">
          About Us
        </HashLink>
      </li>
      <li className="nav__link" onClick={openNav}>
        <HashLink smooth to="/#contact" className="nav__contact">
          Contact
        </HashLink>
      </li>
      <li className="nav__link" onClick={openNav}>
        <NavLink to="/shopping-bag">View Cart</NavLink>
      </li>
    </ul>
    </>
  );
};

export default RightNav;

