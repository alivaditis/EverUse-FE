import { useState } from 'react'
import '../styles/_Checkout.scss'
import { isCompositeComponent } from 'react-dom/test-utils'

const Checkout = ({shoppingBag}) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  
  const items = shoppingBag.map(item => {
    return <div id={Date.now()}>
      <div>
        <p>{item.quantity}x {item.type}</p>
        <p>color: {item.color}</p>
      </div>
      <p>${item.quantity * item.price}</p>
    </div>
  })

  return (<div className="checkout">
    <div className="checkout-header">
      <h2>EverUse</h2>
      <h3>Customer Info</h3>
    </div>
    <p>
    Requests will be sent to EverUse and followed up within 5 business days. Payment through (methods) will be discussed over email.
    </p>
    <div className='request-summary'>
      <h3>Request Summary</h3>
      <p><b>2 items</b></p>
      {items}
      <div className='pricing'>
        <p>Order Subtotal</p>
        <p>$4.99</p>
      </div>
      <div className='pricing'>
        <p>Estimated Shipping</p>
        <p>$4.99</p>
      </div>
      <div className='pricing'>
        <p>Estimated Total</p>
        <p>$24.99</p>
      </div>
    </div>
  </div>)
}

export default Checkout