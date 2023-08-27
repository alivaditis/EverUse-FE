import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';

function App() {
  const [allItems, setAllItems] = useState([])
  const [shoppingBag, setShoppingBag] = useState([
    {
        type: "bracelet",
        color: "moss",
        size: 'M',
        quantity: 2,
        price: 10
    },
    {
        type: "bracelet",
        color: "orange plaid",
        size: 'S',
        quantity: 3,
        price: 10
    },
    {
        type: "leash",
        color: "lime",
        quantity: 1,
        price: 20
    }       
    ])

  const { loading, error, data } = useQuery(GET_ALL_ITEMS)

  useEffect(() => {
    if (!loading) {
      console.log('data:', data)
      setAllItems(data.products)
    }
  }, [])

  return (
    <div className="App">
      {!loading && 
        <>
          {/* {!error && allItems} */}
          <Routes>
            <Route path='/checkout' element={<Checkout shoppingBag={shoppingBag}/>}/>
          </Routes>
        </>
      }
    </div>
  );
}

export default App;

