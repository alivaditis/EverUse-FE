import { useParams } from "react-router-dom"

const ProductDetail = ({itemsForDisplay}) => {
  console.log(itemsForDisplay)
  const productID = useParams().productID;
  console.log(productID)
  return (
    <h1> test</h1>
  )
}

export default ProductDetail