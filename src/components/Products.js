import '../styles/input.css'
import Card from './Card'

export default function Products({items}) {

  const getDisplayedProducts = () => {
    let displayedProducts = [];
    
    const productNames = new Set (items.map(product => product.name))
    
    productNames.forEach(productName => {
      
      const filteredProducts = items
        .filter(product => product.name === productName)
      
      const filteredProduct = filteredProducts.reduce((acc, curr) => {
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
      displayedProducts.push(filteredProduct)
    }) 
    return displayedProducts
  }

  const displayProducts = getDisplayedProducts()
  
  const cards = displayProducts.map(item => {
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