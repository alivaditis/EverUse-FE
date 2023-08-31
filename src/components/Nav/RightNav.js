import { HashLink, NavHashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";





const RightNav = () => {
  return (
    <ul>
      <li>
        <HashLink smooth to="/#products">
          Shop
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#about" className="nav__about">
          About Us
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#contact" className="nav__contact">
          Contact
        </HashLink>
      </li>
      <li>
        <NavLink to="/shopping-bag">View Cart</NavLink>
      </li>
    </ul>
  );
};

export default RightNav;

