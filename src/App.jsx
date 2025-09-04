import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(1000);
  const [data, setData] = useState(1000);
  const [product, setProduct]= useState([]);

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
       setProduct(data)
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
    </div>
  );
};

export default App;
