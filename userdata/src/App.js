import React, { useState, useEffect } from 'react';
import './App.css';



const App = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const res = await fetch('https://reqres.in/api/users?page=1');
    const data = await res.json();
    setUsers(data.data);  
  };
  return (
    <div class="maindiv">
      <h1>API call to get the user data !</h1>
      <div class="container">
         <div class="center">
             <button onClick={getData}>BUTTON</button>
           <div>
             {users.map((user) => (
              <div>{user.email}</div>
              

                ))}


           </div>
         </div>

      
      </div>
    </div>
  );
};
export default App;
