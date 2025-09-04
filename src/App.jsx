import { useEffect, useState } from "react";
import Product from "./components/Product/Product";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState(1000);
  const [products, setProducts]= useState([]);

  const handleClick = () => {
    setCount(count + 1000);
  };

  const handleData = () => {
    setData(data + 1000);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
       setProducts(data)
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };
   
  useEffect(()=>{
    fetchData()
  },[])


  return (
    <div>
      <h1>count value is {count}</h1>
      <h1>data value is {data}</h1>
      {console.log("byeeee")}
      <p>hiiiiiiiii</p>
      <button onClick={handleClick}>click me count</button>
      <button onClick={handleData}>click me data</button>

  
      <Product name={"Motorolla"} price={21000} rating={4}/>
      <Product name={"vivo"} price={11000} rating={3.5}/>
      <Product name={"Oneplus"} price={31000} rating={4.5}/>
      <Product name={"Nokia"} />
    
    </div>
  );
};

export default App;
