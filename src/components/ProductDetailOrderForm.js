const ProductDetailOrderForm = ({product}) => {
  return (
    <form className="details-order-form">
      <div className="details-order-form-title">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>

    </form>
  )
}

export default ProductDetailOrderForm;