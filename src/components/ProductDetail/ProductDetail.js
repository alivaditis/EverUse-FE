import { useParams } from "react-router-dom";
import ProductDetailOrderForm from "./ProductDetailOrderForm";
import DescriptionText from "./DescriptionText";

const ProductDetail = ({itemsForDisplay}) => {
  const productID = useParams().productID;
  const product = itemsForDisplay.find(item => item.id.toString() === (productID.toString()));
 
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
          <DescriptionText description={product.description} />
          <ProductDetailOrderForm product={product}/>
        </div>
      </div>
    </>
  )
}

export default ProductDetail