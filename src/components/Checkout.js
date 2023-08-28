import { useState } from 'react'
import '../styles/_Checkout.scss'

const Checkout = ({shoppingBag}) => {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [comments, setComments] = useState('')
  
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
      <form className='request-form'>
        <h2>Customer Info</h2>
        <label for='request-email'>Email Address</label>
        <input name='request-email' type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <label for='request-first-name'>First Name</label>
        <input name='request-first-name' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        <label for='request-last-name'>Last Name</label>
        <input name='request-last-name' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <label for='request-comments'>Comments/Questions/Concerns</label>
        <textarea name='request-comments' className='request-comments' value={comments} onChange={(e) => setComments(e.target.value)}/>
        <button className='request-submit'>Submit</button>
      </form>
    </div>
  </div>)
}

export default Checkout