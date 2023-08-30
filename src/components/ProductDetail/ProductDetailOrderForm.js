import { useEffect, useState } from "react";
import SizeOptionsContainer from "./SizeOptionsContainer";
import { camelToPascalCase } from "../../helperFunctions";
import { Link } from "react-router-dom";

const ProductDetailOrderForm = ({product, addToShoppingBag, shoppingBag, updateQuantity}) => {
  const [isSingleSize, setIsSingleSize] = useState(false);
  const [inputFields, setInputFields] = useState({
    "color":"",
    "size": "",
    "quantity":0
  });
  const [colorOptions, setColorOptions] = useState([]);
  const [isFormHealthy, setIsFormHealthy] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  
  useEffect(() => {
    setColorOptions(product?.colorOptions)
    console.log(product)
    if (product.sizeOptions?.length === 1) {
      setIsSingleSize(true);
    } else {
      setIsSingleSize(false);
    }
  }, [product]);
  
  
  useEffect(() => {
    checkFormHealth()
  }, [inputFields]);
  
  useEffect(() => {
    const total = shoppingBag.reduce((total, item) => total + item.quantity, 0);
    setTotalQuantity(total);
  }, [shoppingBag])
  
  
  const checkFormHealth = () => {
    if (inputFields.color && inputFields.size && inputFields.quantity) {
      setIsFormHealthy(true);
    } else {
      setIsFormHealthy(false);
    }
  }

  const handleSelect = (e, changedField) => {
    const clonedInputs = {...inputFields};
    clonedInputs[changedField] = e.target.value;
    setInputFields(clonedInputs);
    checkFormHealth();
  }

  const ColorOptionsCode = () => {
    const options = colorOptions?.map(color => {
      return <option key={color} value={color}> { camelToPascalCase(color) } </option>
    })
    return (
      <>
        <option value="">Choose color</option>
        {options}
      </>
    );
  }
  
  const checkForExistingMatch = (cart, item) => {
    const result = cart.find(existingItem => {
      return (existingItem.type?.toLowerCase() === item.type?.toLowerCase()) && (existingItem.size === item.size) && (existingItem.color === item.color)
    });
    return result?.id;
  }

  const saveItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),  
      type: product.name,
      color: inputFields.color,
      size: inputFields.size,
      quantity: Number(inputFields.quantity),
      price: Number(product.price).toFixed(2),
      image: `${product.image}`
    };

    const matchedProductID = checkForExistingMatch(shoppingBag, newItem);
    if (matchedProductID) {
      updateQuantity(matchedProductID, 'add')
    } else {
      addToShoppingBag(newItem);
    }
  };


  return (
    <form className="details-order-form">
      {product?.name && <div className="details-order-form__title">
        <p>{camelToPascalCase(product.name)}</p>
        <p>${product.price}</p>
      </div>}
      <div className="selection-pair">
         <p className="selection-text">Size:</p> 
         <SizeOptionsContainer isSingleSize={isSingleSize} handleSelect={handleSelect}/>
      </div>
      <div className="selection-pair">
         <label className="selection-text">Color:</label> 
         <select id="colorOptions" className={!inputFields.color? "faded":""} value={inputFields.color} onChange={(e)=> {handleSelect(e, "color")}}>
          <ColorOptionsCode />
         </select>
      </div>
      <div className="selection-pair">
         <label className="selection-text">Quantity:</label> 
         <select id="quantityOptions" className={!inputFields.quantity? "faded":""} value={inputFields.quantity} onChange={(e) => {handleSelect(e, "quantity")}}>
            <option value="" className="faded">Choose quantity</option>
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
      <div className="btn-container">
        <button disabled={!isFormHealthy} className={isFormHealthy? "submit-btn": "faded-btn"}  onClick={(e) => {saveItem(e)}}>
          Add to Bag
        </button>
        <Link to={'/shopping-bag'}>
          <button disabled={!shoppingBag.length} className={shoppingBag.length? "submit-btn": "faded-btn"}>
            <p> Cart <span className={totalQuantity? "cart-count": "hidden"}>{totalQuantity? totalQuantity: ""}</span></p>
          </button>

        </Link>
      </div>
      
    </form>
  )
}

export default ProductDetailOrderForm;