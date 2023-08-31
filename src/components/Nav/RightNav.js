import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";





const RightNav = () => {
  return (
    <ul>
      <li className="nav__link">
        <HashLink smooth to="/#products">
          Shop
        </HashLink>
      </li>
      <li className="nav__link">
        <HashLink smooth to="/#about" className="nav__about">
          About Us
        </HashLink>
      </li>
      <li className="nav__link">
        <HashLink smooth to="/#contact" className="nav__contact">
          Contact
        </HashLink>
      </li>
      <li className="nav__link">
        <NavLink to="/shopping-bag">View Cart</NavLink>
      </li>
    </ul>
  );
};

export default RightNav;

