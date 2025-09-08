import { useState } from "react";
import "./App.css";

const App = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress]= useState("")//

  const [formData, setFromData] = useState({
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleClick = () => {
    alert("submitted");
  };

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setFromData({ ...formData, [name]: value });
  };

const handleSubmit=(e)=>{
  e.preventDefault();

  const email=e.target[0].value;
  const password=e.target[1].value;
  const phone=e.target[2].value;

  console.log(email,password, phone)
}

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Enter your email</label>
        <input
          placeholder="your name"
          type="text"
          id="email"         
          name="email"
        />

        <label htmlFor="password">Password</label>
        <input
          placeholder="your name"
          type="password"
          id="password"        
          name="password"
        />

        <label htmlFor="phone">phone no</label>
        <input
          placeholder="your name"
          type="number"
          id="phone"      
          name="phone"
        />

        <button  onClick={handleClick}>Submit form</button>
      </form>

     
    </div>
  );
};

export default App;
