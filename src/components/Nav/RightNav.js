import { HashLink, NavHashLink } from "react-router-hash-link";





const RightNav = ({ open }) => {
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
        <NavHashLink to="/shopping-bag">View Cart</NavHashLink>
      </li>
    </ul>
  );
};

export default RightNav;

