// BURGER COMPONENT //

const Burger = ({ openNav }) => {
  return (
    <img src={require('../../images/hamburger-menu2.png')} alt="burger" className="nav__burger" onClick={openNav}/>
  );
}

export default Burger;