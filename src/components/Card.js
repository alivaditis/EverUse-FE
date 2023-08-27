export default function Card({items}) {
  console.log(items)
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
    <>
      {cards}
    </>
  )
}