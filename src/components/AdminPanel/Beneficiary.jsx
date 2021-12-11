import React, { useEffect, useState } from 'react'
import { Table, Tag, Space,Button } from 'antd';
const axios = require("axios");
require('dotenv').config({ debug: process.env.DEBUG })
function Beneficiary() {
  const [users,setUsers]=useState([])
  const getUsers= async()=>{
    try{
      const res= await axios.get("http://localhost:9000/admin/users")
        console.log(res.data,"Users")
        setUsers(
          res.data.map((i) => ({
           userID:i._id,
           name: i.name,
           email: i.email,
           userType: i.userType
                   }))
        );
      }
      catch(e){
      console.log(e)
      }
  }
 
   
const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
   
    {
      title: 'userType',
      key: 'userType',
      dataIndex: 'userType'
    }, 
    {
      title: 'Userid',
      key: 'userID',
      dataIndex: 'userID'
    },
   
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
    return (
        <div>
            <Table columns={columns} dataSource={users} />,
           <Button onClick={()=>{
             getUsers()
           }}>Users </Button>
        </div>
    )
}

export default Beneficiary
