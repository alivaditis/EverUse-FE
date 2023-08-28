import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { Route, Routes, NavLink } from 'react-router-dom';
import ShoppingBag from './ShoppingBag';
import Checkout from './Checkout';
import { useState } from 'react';

function App() {
  const [shoppingBag, setShoppingBag] = useState(
    [
      {
        id: 1,  
        type: "bracelet",
        color: "moss",
        size: 'M',
        quantity: 2,
        price: 10.00,
        image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      },
      {
        id: 2,
        type: "bracelet",
        color: "orange plaid",
        size: 'S',
        quantity: 3,
        price: 10.00,
        image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      },
      {
        id: 3,
        type: "leash",
        color: "lime",
        size: 'onesize',
        quantity: 1,
        price: 20.00,
        image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      }       
    ])
  const [totalPrice, setTotalPrice] = useState(0);

  const addTotalPrice = () => {
    const total = shoppingBag.reduce((price, item) => {
      return price += (item.price * item.quantity)
    }, 0)
    setTotalPrice(total)
  }

  const removeItemFromBag = id => {
    setShoppingBag(shoppingBag.filter(item => item.id != id))
  }

  const updateQuantity = (id, operation = 'subtract') => {
    let index;
    const newItem = {...shoppingBag.find((item, i) => {
      index = i;
      return item.id === id
    })}
    operation === 'add' ? newItem.quantity += 1 : newItem.quantity -=1;
    newItem.quantity ? setShoppingBag(shoppingBag.toSpliced(index, 1, newItem)) : removeItemFromBag(id)
  }

  const { loading, error, data } = useQuery(GET_ALL_ITEMS)

  let allItems

  if (!loading && !error) {
    allItems = data.products.map(item => {
      return (
      <div key={item.id} id={item.id}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.color}</p>
        <p>{item.price}</p>
      </div>)
    })
  }

  return (
    <div className="App">
      {!loading && 
        <>
          <NavLink to='/shopping-bag'>Cart</NavLink>
          {/* {!error && allItems} */}
          {/* <ShoppingBag /> */}
        </>
      }
      <Routes>
        <Route path='/shopping-bag' element={<ShoppingBag shoppingBag={shoppingBag} totalPrice={totalPrice} addTotalPrice={addTotalPrice} removeItemFromBag={removeItemFromBag} updateQuantity={updateQuantity} />} />
        {/* <Route path='/checkout' element={<Checkout />} /> */}
      </Routes>
    </div>
  );
}

export default App;
