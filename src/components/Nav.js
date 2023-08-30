// NAV COMPONENT //

import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <h1>EverUse</h1>
      <ul>
        <li><NavLink to='/shopping-bag'>View Bag</NavLink></li>
        <li><HashLink smooth to='/#about' className="nav__about">About Us</HashLink></li>
        <li><HashLink smooth to='/#contact' className="nav__contact">Contact</HashLink></li>
      </ul>
    </div>
  )
}

export default Nav;