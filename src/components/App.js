import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import Landing from './Landing';
import Products from './Products';
import '../styles/input.css';

function App() {
  const { loading, error, data } = useQuery(GET_ALL_ITEMS)

  let allItems

  if (!loading) {
    console.log('data:', data)
    // allItems = data.products.map(item => {
    //   return <div>
    //     <h1>{item.name}</h1>
    //     <p>{item.description}</p>
    //     <p>{item.color}</p>
    //     <p>{item.price}</p>
    //   </div>
    // })
  }

  return (
    <div className="App">
      {!loading && 
        <>
          <Landing />
          <Products />
          {/* {!error && allItems} */}
        </>
      }
    </div>
  );
}

export default App;
