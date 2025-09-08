import { useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail]=useState("")
  const [password, setPassword]= useState("");

  const handleClick = () => {
   setEmail("aman@gmail.com")
  };

  console.log(email)

  const handleChange = (e) => {
   setPassword(e.target.value)
  };


  return (
    <div className="container">
      <label htmlFor="email">Enter your email</label>
      <input placeholder="your name" type="text" id="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
       />

      <label htmlFor="password">Password</label>
      <input
        placeholder="your name"
        type="password"
        id="password"
        onChange={handleChange}
        value={password}
      />

      <button onClick={handleClick}>Submit form</button>
    </div>
  );
};

export default App;
