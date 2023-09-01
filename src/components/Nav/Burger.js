// BURGER COMPONENT //

const Burger = ({ openNav }) => {
  return (
    <div className="burger" onClick={openNav}>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
      <div className="burger__line"></div>
    </div>
  );
}

export default Burger;