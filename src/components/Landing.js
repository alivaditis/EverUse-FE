// LANDING COMPONENT //

import { Link } from "react-scroll";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__header">
        <h1 className="landing__text">FROM PEAK TO POCKET</h1>
        <Link to="products" activeClass="active" spy={true} smooth={true} offset={-95} duration={500} className="landing__button">Explore</Link>
      </div>
    </div>
  )
};

export default Landing;