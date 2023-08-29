import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const ShoppingBag = ({ shoppingBag, totalPrice, removeItemFromBag, updateQuantity }) =>{

  const items = shoppingBag.map(item => {
    return (
    <article key={item.id} className='item'>
      <img src={item.image} alt='bracelet' className='item__img' />
      <span className='item__info'>
        <h4 className='item__title'>{item.type}</h4>
        <div className='item__details'>
          <div className='item__specs'>
            <p className='item__spec'>Size: {item.size}</p>
            <p className='item__spec'>Color: {item.color}</p>
            <p className='item__spec'>Unit Price: ${item.price}</p>
          </div>
          <div className='item__counter'>
            <span className="material-icons-round counter__icon" onClick={() => updateQuantity(item.id)}>remove</span>
            <p className='item__quantity'>{item.quantity}</p>
            <span className="material-icons-round counter__icon" onClick={() => updateQuantity(item.id, 'add')}>add</span>
          </div>
          <p className='item__price'>${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </span>
      <span className="material-icons-round item__delete" id={item.id} onClick={(e) => removeItemFromBag(e.target.id)}>close</span>
    </article>)
  })

  return (
    <div className='bag'>
      <h1>EverUse</h1>
      <h2>Shopping Bag</h2>
      {shoppingBag.length ?
      <div className='bag__contents'>
        <section className='bag__items'>
          {items}
        </section>
        <section className='bag__summary'>
          <h3 className='bag__summary-header'>Request Summary</h3>
          <div className='bag__subtotal'>
            <p>Order Subtotal:</p>
            <p>${totalPrice}</p>
          </div>
          <NavLink to='/checkout' className='bag__button'>Continue to Request</NavLink>
        </section>
      </div>
      :
      <div className='bag__empty'>
        <h3>Your shopping bag is empty.</h3>
        <NavHashLink smooth to='/#products' className='bag__button'>Continue Shopping</NavHashLink>
      </div>
      }
    </div>
  )
}

export default ShoppingBag;