import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { Route, Routes } from 'react-router-dom';
import ShoppingBag from './ShoppingBag';
import Checkout from './Checkout';

function App() {
  // const { loading, error, data } = useQuery(GET_ALL_ITEMS)

  // let allItems

  // if (!loading && !error) {
  //   console.log('data:', data)
  //   allItems = data.products.map(item => {
  //     return (
  //     <div key={item.id} id={item.id}>
  //       <h1>{item.name}</h1>
  //       <p>{item.description}</p>
  //       <p>{item.color}</p>
  //       <p>{item.price}</p>
  //     </div>)
  //   })
  // }

  return (
    <div className="App">
      {/* {!loading &&  */}
        <>
          {/* {!error && allItems} */}
          <ShoppingBag />
        </>
      {/* } */}
      <Routes>
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
