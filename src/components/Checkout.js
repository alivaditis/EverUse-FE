
// CHECKOUT COMPONENT //

import Form from './Form'
import { useNavigate } from 'react-router-dom'
import '../styles/_Checkout.scss'

const Checkout = ({shoppingBag, totalPrice, emptyShoppingBag, updateSuccessMessage}) => {

  const navigate = useNavigate()

  if(!shoppingBag.length) {
    navigate('/shopping-bag')
  }

  const items = shoppingBag.map(item => {
    return <div className='checkout__item' key={item.id}>
      <div>
        <b>{item.quantity}x {item.type}</b>
        <p>Color: {item.color}</p>
        {item.size !== 'onesize' && <p>Size: {item.size}</p>}
      </div>
      <b>${(item.quantity * item.price).toFixed(2)}</b>
    </div>
  })

  const numberOfItems =
    shoppingBag.reduce((acc, curr) => {
      return acc + curr.quantity
    }, 0)

  return (<div className="checkout">
    <div className="checkout__header">
      <h2>EverUse</h2>
      <h3>Order Request</h3>
    </div>
    <p>
    Requests will be sent to EverUse and followed up within 5 business days. Payment through (methods) will be discussed over email.
    </p>
    <div className='checkout__container'>
      <div className='checkout__summary'>
        <h3>Request Summary</h3>
        <b>{numberOfItems} items</b>
        {items}
        <div className='checkout__pricing'>
          <p>Estimated Total</p>
          <p>${totalPrice}</p>
        </div>
      </div>
    <Form shoppingBag={shoppingBag} totalPrice={totalPrice} emptyShoppingBag={emptyShoppingBag} updateSuccessMessage={updateSuccessMessage}/>
    </div>
  </div>)
}

export default Checkout
