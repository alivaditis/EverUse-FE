import '../styles/input.css'
import Card from './Card'

export default function Products({items}) {
  return (
    <div className="products">
      <h1 className="products__header">Products</h1>
      <div className="products__container">
        <Card items={items} />
      </div>
    </div>
  )
}