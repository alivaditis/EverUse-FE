// LANDING COMPONENT //

import { NavHashLink } from 'react-router-hash-link';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__header">
        <h1 className="landing__text">FROM PEAK TO POCKET</h1>
        <NavHashLink smooth to='/#products' className="landing__button">Explore</NavHashLink>
      </div>
    </div>
  )
};

export default Landing;