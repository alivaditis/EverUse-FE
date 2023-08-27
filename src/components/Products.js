import '../styles/input.css'
import Card from './Card'

export default function Products({items}) {
  
  const cards = items.map(item => {
    return (
      <div className="card" key={item.id}>
        <img src={item.image} alt={item.name} className="card__image" />
        <div className="card__info">
          <h2 className="card__name">{item.name}</h2>
          <p className="card__price">${item.price}</p>
          <p className="card__description">{item.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="products">
      <h1 className="products__header">Products</h1>
      <div className="products__container">
        {cards}
      </div>
    </div>
  )
}