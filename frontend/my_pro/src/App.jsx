// import react from "react";
// import {useState,useEffect} from "react";
// import axios from "axios";

// function App(){
//   const [message,setMessage] = useState("");

//   useEffect(()=>{
//     axios.get("https://your-backend.onrender.com/api/hi"
//      .then((res)=> setMessage(res.data.message))
//       .catch((err)=> console.error(err))

      
//     },[]);


//     return (
//       <div style={{ textAlign :"center" ,marginTop:"50x" }}>
//         <h1>Frontend Running</h1>
//         <h2>backend says: {message}</h2>
//       </div>
//     )
//   }
//   export default App;

 import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://your-backend.onrender.com/api/hi")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Frontend Running</h1>
      <h2>Backend says: {message}</h2>
    </div>
  );
}

export default App;
