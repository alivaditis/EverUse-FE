/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from '@apollo/client';
import { GET_ALL_ITEMS } from '../api';
import { useState, useEffect } from 'react';
import Landing from './Landing';
import Products from './Products';
import About from './About';

function App() {
  const [items, setItems] = useState([])
  const [itemsForDisplay, setItemsForDisplay] = useState([])

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
          <Landing />
          <Products itemsForDisplay={itemsForDisplay} />
          <About />
        </>
      }
    </div>
  );
}

export default App;
