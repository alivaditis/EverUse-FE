import { NavLink } from 'react-router-dom';

const ShoppingBag = () =>{
  const img = 'https://cdn.shopify.com/s/files/1/0192/8012/products/friendship-bracelet-adjustable-camp-minimalist-rope-dowling-brothers-bangle-jewellery-740.jpg'
  
  return (
    <div className='bag'>
      <h1>EverUse</h1>
      <h2>Shopping Bag</h2>
      <section className='bag__items'>
          {/* map over shopping bag items */}
          <article className='item'>
            <img src={img} class='item__img' />
            <span className='item__info'>
              <h4 className='item__title'>Bracelet</h4>
              <div className='item__details'>
                <div className='item__specs'>
                  <p className='item__spec'>Size: M</p>
                  <p className='item__spec'>Color: Moss</p>
                  <p className='item__spec'>Unit Price: $10</p>
                </div>
                <p className='item__counter'>
                  <span className="material-icons-round">remove</span>
                  1
                  <span className="material-icons-round">add</span>
                </p>
                <p className='item__price'>$10</p>
              </div>
            </span>
            <span className="material-icons-round">close</span>
          </article>
      </section>
      <section className='bag__summary'>
        <h3>Request Summary</h3>
        <div className='bag__subtotal'>
          <p>Order Subtotal:</p>
          <p>$[someamount]</p>
        </div>
        <NavLink to='/checkout' className='bag__button'>Continue to Request</NavLink>
      </section>
    </div>
  )
}

export default ShoppingBag;