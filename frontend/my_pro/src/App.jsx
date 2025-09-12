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

// new update this code
//  import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://your-backend.onrender.com/api/hi")
//       .then((res) => setMessage(res.data.message))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Frontend Running</h1>
//       <h2>Backend says: {message}</h2>
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch message from backend
  useEffect(() => {
    axios
      .get("https://your-backend.onrender.com/api/hi")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error("Message fetch error:", err));
  }, []);

  // ✅ Fetch users list from backend
  useEffect(() => {
    axios
      .get("https://your-backend.onrender.com/api/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Users fetch error:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "40px" }}>
      <h1 style={{ color: "darkblue" }}>🚀 Fullstack App Demo</h1>
      
      <section style={{ margin: "30px auto", width: "60%", padding: "20px", border: "2px solid #ddd", borderRadius: "10px" }}>
        <h2>📢 Backend says:</h2>
        <p style={{ fontSize: "18px", color: "green" }}>{message || "Loading message..."}</p>
      </section>

      <section style={{ margin: "30px auto", width: "60%", padding: "20px", border: "2px solid #ddd", borderRadius: "10px" }}>
        <h2>👥 Users from Backend API:</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : users.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((user) => (
              <li key={user.id} style={{ padding: "8px", fontSize: "16px", borderBottom: "1px solid #eee" }}>
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </section>

      <footer style={{ marginTop: "50px", color: "gray" }}>
        <p>Made with ❤️ using React + Render</p>
      </footer>
    </div>
  );
}

export default App;
