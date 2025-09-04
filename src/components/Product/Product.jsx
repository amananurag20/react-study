import HomePage from "../HomePage/HomePage";
import "./Product.css";

function Product({name, price=10000,rating=3.8}) {
  
  return (
    <>
      <h1>Mobile name: {name}</h1>
      <h3>Price : {price}</h3>
      <p>rating {rating} star</p>

    
    </>
  );
}

export default Product;
