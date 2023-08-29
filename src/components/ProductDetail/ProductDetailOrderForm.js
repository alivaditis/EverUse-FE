import { useState } from "react";
import SizeOptionsContainer from "./SizeOptionsContainer";

const ProductDetailOrderForm = ({product}) => {
  const [isSingleSize, setIsSingleSize] = useState(false);
  return (
    <form className="details-order-form">
      <div className="details-order-form__title">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <div className="selection-pair">
         <p className="selection-text">Size:</p> 
         <SizeOptionsContainer isSingleSize={isSingleSize} />
      </div>

    </form>
  )
}

export default ProductDetailOrderForm;