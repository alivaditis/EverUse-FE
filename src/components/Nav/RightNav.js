
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const RightNav = ({ openNav }) => {

  return (
    <>
      <div className="nav__right">
        <img
          src={require("../../images/arrow.png")}
          alt="home"
          className="nav__close"
          onClick={openNav}
        />
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
