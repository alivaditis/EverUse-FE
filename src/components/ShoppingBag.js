import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ShoppingBag = () =>{
  const [totalPrice, setTotalPrice] = useState(0);
  
  useEffect(() => {
    addTotalPrice();
  }, [])
  
  const [shoppingBag, setShoppingBag] = useState(
    [
      {
          type: "bracelet",
          color: "moss",
          size: 'M',
          quantity: 2,
          price: 10.00,
          image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      },
      {
          type: "bracelet",
          color: "orange plaid",
          size: 'S',
          quantity: 3,
          price: 10.00,
          image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      },
      {
          type: "leash",
          color: "lime",
          size: 'onesize',
          quantity: 1,
          price: 20.00,
          image: 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
      }       
    ])

  const addPricePerItem = (item) => {
    return item.price * item.quantity;
  }

  const addTotalPrice = () => {
    const total = shoppingBag.reduce((price, item) => {
      return price += addPricePerItem(item)
    }, 0)
    setTotalPrice(total)
  }

  const items = shoppingBag.map(item => {
    return (
    <article className='item'>
      <img src={item.image} className='item__img' />
      <span className='item__info'>
        <h4 className='item__title'>{item.type}</h4>
        <div className='item__details'>
          <div className='item__detail item__specs'>
            <p className='item__spec'>Size: {item.size}</p>
            <p className='item__spec'>Color: {item.color}</p>
            <p className='item__spec'>Unit Price: ${item.price}</p>
          </div>
          <div className='item__detail item__counter'>
            <span className="material-icons-round counter__icon">remove</span>
            {item.quantity}
            <span className="material-icons-round counter__icon">add</span>
          </div>
          <p className='item__detail item__price'>${addPricePerItem(item)}</p>
        </div>
      </span>
      <span className="material-icons-round item__delete">close</span>
    </article>)
  })

  return (
    <div className='bag'>
      <h1>EverUse</h1>
      <h2>Shopping Bag</h2>
      <section className='bag__items'>
        {items}
      </section>
      <section className='bag__summary'>
        <h3>Request Summary</h3>
        <div className='bag__subtotal'>
          <p>Order Subtotal:</p>
          <p>${totalPrice}</p>
        </div>
        <NavLink to='/checkout' className='bag__button'>Continue to Request</NavLink>
      </section>
    </div>
  )
}

export default ShoppingBag;