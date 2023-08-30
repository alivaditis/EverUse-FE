// HOME COMPONENT //

import Landing from './Landing';
import Products from './Products';
import About from './About';

const Home = ({itemsForDisplay}) => {
  return (
    <>
      <Landing />
      <Products itemsForDisplay={itemsForDisplay} />
      <About /> 
    </>
  )
  
}

export default Home;