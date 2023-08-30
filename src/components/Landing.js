// LANDING COMPONENT //

import { HashLink } from 'react-router-hash-link';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__header">
        <h1 className="landing__text">FROM PEAK TO POCKET</h1>
        <HashLink smooth to='/#products' className="landing__button">Explore</HashLink>
      </div>
    </div>
  )
};

export default Landing;