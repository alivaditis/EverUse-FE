import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { useState, useEffect } from 'react';
import Landing from './Landing';
import Products from './Products';
import '../styles/input.css';

function App() {
  const [items, setItems] = useState([])
  
  const { loading, error, data } = useQuery(GET_ALL_ITEMS)
  console.log(data)
  
  useEffect(() => {
    if (!items.length && !loading) {
      setItems(data.products)
    }
  }, [data]);


  return (
    <div className="App">
      {!loading && 
        <>
          <Landing />
          <Products items={items} />
          {/* {!error && allItems} */}
        </>
      }
    </div>
  );
}

export default App;
