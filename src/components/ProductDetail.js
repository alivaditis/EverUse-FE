import { useParams } from "react-router-dom";
import { camelToPascalCase } from "../helperFunctions";
import ProductDetailOrderForm from "./ProductDetailOrderForm";

const ProductDetail = ({itemsForDisplay}) => {
  const productID = useParams().productID;
  const product = itemsForDisplay.find(item => item.id.toString() === (productID.toString()));
  console.log(product)
 
  return (
    <>
      <div className="details">
        <div className="details__header">
          <h2 className="details__header-text">Products handmade from upcycled climbing ropes in an effort to reduce unnecessary waste</h2>
        </div>
        <div className="details__info">
          <div className="details__info-img-container">
            <img className="details__info-img" alt={product.name} src={product.image}/>
          </div>
          <ProductDetailOrderForm product={product}/>
        </div>
      </div>
    </>
  )
}

export default ProductDetail