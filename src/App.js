import Card from './Card.jsx';
import React, { useState, useEffect} from 'react'
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=>{
    setUsers(result.data)
    })
  })

  return (
    <div className='Cards'>
      <Card/>
    </div>
   
  );
}

export default App;
