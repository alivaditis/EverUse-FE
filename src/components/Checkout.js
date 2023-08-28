import { useState } from 'react'
import Form from './Form'
import '../styles/_Checkout.scss'

const Checkout = ({shoppingBag}) => {
  
  const items = shoppingBag.map(item => {
    return <div className='request-item' id={Date.now()}>
      <div>
        <p>{item.quantity}x {item.type}</p>
        <p>Color: {item.color}</p>
        {item.size !== 'onesize' && <p>Size: {item.size}</p>}
      </div>
      <p>${(item.quantity * item.price).toFixed(2)}</p>
    </div>
  })

  const getTotal = (shoppingBag) => {
    return shoppingBag.reduce((acc, curr) => {
      return (acc + (curr.price * curr.quantity))
    }, 0).toFixed(2) 
  }

  return (<div className="checkout">
    <div className="checkout-header">
      <h2>EverUse</h2>
      <h3>Order Request</h3>
    </div>
    <p>
    Requests will be sent to EverUse and followed up within 5 business days. Payment through (methods) will be discussed over email.
    </p>
    <div className='checkout-container'>
      <div className='request-summary'>
        <h3>Request Summary</h3>
        <p><b>2 items</b></p>
        {items}
        <div className='pricing'>
          <p>Estimated Total</p>
          <p>${getTotal(shoppingBag)}</p>
        </div>
      </div>
    <Form/>
    </div>
  </div>)
}

export default Checkout