import { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState(1000);
  const [products, setProducts] = useState([]);

  const handleClick = (action) => {
    if (action === "increase") {
      return setCount(count + 1000);
    }

    setCount(count - 1000);
  };

  const handleData = () => {
    setData(data + 1000);
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const newData = data.map((item) => {
        return { ...item, num: crypto.randomUUID() };
      });
      console.log(newData);
      setProducts(newData);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {products.map((item, index) => {
        return <Product key={item.num} item={item} />;
      })}

      <h1>count value is {count}</h1>
      <h1>data value is {data}</h1>

      <button
        onClick={() => handleClick("increase")}      
      >
        increase count
      </button>
      <button onClick={handleClick}>decrease count</button>
      <button onClick={handleData}>click me data</button>
    </div>
  );
};

export default App;
