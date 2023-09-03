// HOME COMPONENT //

import Landing from './Landing';
import Products from './Products';
import About from './About';
import Nav from './Nav/Nav';
import LoadSpinner from './LoadSpinner';
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { useEffect } from 'react';

const Home = ({itemsForDisplay, setItems}) => {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS);

  useEffect(() => {
    if (!itemsForDisplay.length && !loading && !error) {
      setItems(data.products);
    }
  }, [data]);

  return (
    <>
      {loading && <>
        <LoadSpinner />
      </>}
      
      {!loading && <>
      <Nav />
      <Landing />
      <Products itemsForDisplay={itemsForDisplay} />
      <About />
      </>}
    </>
  )
};

export default Home;