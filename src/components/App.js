/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Checkout from './Checkout';
import '../styles/_App.scss'
import ShoppingBag from './ShoppingBag';
import Home from './Home';


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
  const [items, setItems] = useState([])
  const [itemsForDisplay, setItemsForDisplay] = useState([])

  const addTotalPrice = () => {
    const total = shoppingBag.reduce((price, item) => {
      return price += (item.price * item.quantity)
    }, 0)
    setTotalPrice(parseInt(total).toFixed(2))
  }

  useEffect(() => {
    addTotalPrice();
  }, [shoppingBag])

  const removeItemFromBag = id => {
    setShoppingBag(shoppingBag.filter(item => item.id !== parseInt(id)))
  }

  const updateQuantity = (id, operation = 'subtract') => {
    let index;
    const newItem = shoppingBag.find((item, i) => {
      index = i;
      return item.id === id
    })
    operation === 'add' ? newItem.quantity += 1 : newItem.quantity -=1;
    !newItem.quantity ? removeItemFromBag(id) :
      setShoppingBag(shoppingBag => {
        const newBag = [...shoppingBag]
        newBag.splice(index, 1, newItem)
        setShoppingBag(newBag)
      })
  }
    
  const getItemsForDisplay = () => {
    const productsForDisplay = [];
    
    const productNames = new Set (items.map(product => product.name))
    
    productNames.forEach(productName => {
      
      const filteredProducts = items
        .filter(product => product.name === productName)
      
      const filteredProduct = filteredProducts.reduce((acc, curr) => {
        acc.id = curr.name;
        acc.name = curr.name;
        acc.price = curr.price;
        acc.category = curr.category
        acc.image = curr.image
        acc.description = curr.description
        if (!acc.colorOptions.includes(curr.color)) {
          acc.colorOptions.push(curr.color)
        }
        if (!acc.sizeOptions.includes(curr.size)) {
          acc.sizeOptions.push(curr.size)
        }
        return acc;
      }, {
        colorOptions: [],
        sizeOptions: []
      })
      productsForDisplay.push(filteredProduct)
    }) 
    return productsForDisplay
  }

  // eslint-disable-next-line no-unused-vars
  const { loading, error, data } = useQuery(GET_ALL_ITEMS)
  
  useEffect(() => {
    if (!items.length && !loading && !error) {
      setItems(data.products)
    }
  }, [data]);

  useEffect(() => {
    const displayProducts = getItemsForDisplay()
    setItemsForDisplay(displayProducts)
  }, [items]);

  return (
    <div className="app">
      {!loading && 
        <>
          <NavLink to='/shopping-bag'>Cart</NavLink>
          <Routes>
            <Route path='/' element={<Home itemsForDisplay={itemsForDisplay} />} />
            <Route 
              path='/shopping-bag' 
              element={<ShoppingBag 
                shoppingBag={shoppingBag} 
                totalPrice={totalPrice} 
                removeItemFromBag={removeItemFromBag} 
                updateQuantity={updateQuantity} 
              />} 
            />
            <Route path='/checkout' element={<Checkout shoppingBag={shoppingBag} totalPrice={totalPrice}/>}/>
          </Routes>
        </>
      }
    </div>
  );
}


export default App;

