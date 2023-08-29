import { useEffect, useState } from "react";
import SizeOptionsContainer from "./SizeOptionsContainer";
import { camelToPascalCase } from "../../helperFunctions";

const ProductDetailOrderForm = ({product}) => {
  console.log(product)
  const [isSingleSize, setIsSingleSize] = useState(false);
  const [inputFields, setInputFields] = useState({});
  const [colorOptions, setColorOptions] = useState([]);
  
  useEffect(() => {
    setColorOptions(product.colorOptions)
  }, [])

  const handleSelect = (e, changedField) => {
    const clonedInputs = {...inputFields};
    clonedInputs[changedField] = e.target.value;
    setInputFields(clonedInputs);
  }

  const ColorOptionsCode = () => {
    const options = colorOptions.map(color => {
      return <option key={color} value={color}> { camelToPascalCase(color) } </option>
    })
    return options;
  }

  return (
    <form className="details-order-form" onSubmit={(e) => {addToShoppingBag(e)}}>
      <div className="details-order-form__title">
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
      <div className="selection-pair">
         <p className="selection-text">Size:</p> 
         <SizeOptionsContainer isSingleSize={isSingleSize} />
      </div>
      <div className="selection-pair">
         <label className="selection-text">Color:</label> 
         <select id="colorOptions" value={inputColor} onChange={(e)=> {handleSelect(e, "color")}}>
          <ColorOptionsCode />
         </select>
      </div>
      <div className="selection-pair">
         <label className="selection-text">Quantity:</label> 
         <select id="quantityOptions" value={inputQuantity} onChange={(e) => {handleSelect(e, "quantity")}}>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
            <option value={6}> 6 </option>
            <option value={7}> 7 </option>
            <option value={8}> 8 </option>
            <option value={9}> 9 </option>
         </select>
      </div>
      <button className="submit-btn">
        Add to Bag
      </button>
      
    </form>
  )
}

export default ProductDetailOrderForm;