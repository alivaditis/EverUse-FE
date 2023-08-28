import { useParams } from "react-router-dom";
import { camelToPascalCase } from "../helperFunctions";

const ProductDetail = ({itemsForDisplay}) => {
  console.log(itemsForDisplay)
  const productID = useParams().productID;
  const product = itemsForDisplay.find(item => item.id === productID)
 
  return (
    <h1> test</h1>
  )
}

export default ProductDetail