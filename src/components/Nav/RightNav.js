import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const RightNav = ({openNav}) => {
  return (
    <ul>
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
  );
};

export default RightNav;

