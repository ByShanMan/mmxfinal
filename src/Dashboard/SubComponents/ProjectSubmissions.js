import React from 'react';
import Card from '@material-ui/core/Card';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import './StudentProfiles.css';


export default function ProjectSubmissions() {
  const [users, setUsers] = useState([])
  
  
  useEffect(() => {
 axios.get("http://localhost:4000/users")
 .then(response => {
   setUsers(response.data)
  })
}, [users])


  return (
        <div className="pro-sub-page">
          <div className="pro-sub">
          <h1>PROJECT SUBMISSIONS</h1>
          <button><img src="downloadicon.png" alt="download"/>DOWNLOAD FILES</button>
          <button><img src="doneicon.png" alt="mark"/>MARK PROJECT AS COMPLETE</button>
          </div>
          
          <div className="checkSubmCards">   
          
          <input type="checkbox" />
          {users.map(user => (
          <Card>
          
          <img src={user.profile_pic} />
          <p>{user.first_name} submitted their project</p>
          <p>date and time submitted</p>
          
          </Card>
          ))} 
       </div>
      </div>
  );
} 
