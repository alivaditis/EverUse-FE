import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { useEffect, useState } from 'react';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS)
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!items.length && !loading) {
      console.log('here')
      setItems(data.products)
    }
  }, [data]);

  useEffect(()=> {
    console.log(data, "data")
    console.log(items, "items")
    
  }, [items])

  return (
    <div className="App">
      {!loading && 
        <>
          <h1>Remove this line once writing code.</h1>
          {/* {!error && allItems} */}
        </>
      }
    </div>
  );
}

export default App;
