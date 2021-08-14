
import React, { useState, useEffect } from "react";
import axios from 'axios'
const style={
  float:"left"
}
export default function Sidebar() {
  const [getApi, setApi] = useState([]);
  const getData=async()=>{
    const response =await axios.get("http://localhost:9000/admin/users")
    const data= await response.data
    setApi(data)
    console.log(data)
  }
  useEffect(async()=>{
    getData()
  },[]) 
      

  return <div style={style}>
     {getApi.map((user) => {
       const {_id,name,email}=user
       console.log(name)
          return (
            <tr>

              <td>{_id}</td>
              <td>{name}</td>
              <td>{email}</td>
            </tr>
          );
        })}
 
        
  </div>
}
