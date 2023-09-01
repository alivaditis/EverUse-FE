import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Burger from "./Burger";

const RightNav = ({ openNav }) => {
  const [home, setHome] = useState(true);
  const location = window.location.pathname;

  useEffect(() => {
    if (location === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);

  return (
    <>
      <div className="nav__right">
        <img
          src={require("../../images/arrow.png")}
          alt="home"
          className="nav__close"
          onClick={openNav}
        />
        {!home && (
          <li className="nav__link">
            <NavLink to="/">Home</NavLink>
          </li>
        )}
        <li className="nav__link" onClick={openNav}>
          <Link
            to="products"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={openNav}
          >
            Shop
          </Link>
        </li>
        <li className="nav__link" onClick={openNav}>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-95}
            duration={500}
            onClick={openNav}
          >
            About Us
          </Link>
        </li>
        <li className="nav__link" onClick={openNav}>
          <NavLink to="/shopping-bag">View Cart</NavLink>
        </li>
      </div>
    </>
  );
};

export default RightNav;
