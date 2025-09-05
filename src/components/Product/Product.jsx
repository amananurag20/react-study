import HomePage from "../HomePage/HomePage";
import "./Product.css";

function Product(props) {
  
  return (
    <>
     <div className="product-box">
            <img src={props.item.image} className="product-image"></img>
            <h1>{props.item.title}</h1>
            <p>{props.item.description}</p>
            <h3>Price {props.item.price}</h3>
          </div>
    
    </>
  );
}

export default Product;
