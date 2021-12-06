import React,{useEffect,useState} from 'react'
import { Table, Tag, Space } from 'antd';
const axios = require("axios");


function AppealedCampaigns()  {
    
    const viewData= async()=>{
        try{
            const res= await axios.get("http://localhost:9000/admin/viewAppeals");
            console.log(res)
          }catch(e){
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
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title:"Beneficiary",
            dataIndex:"Beneficiary",
            key:"beneficiary"
        }
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
           <Table columns={columns} dataSource={data} />
        </div>
    )
}

export default AppealedCampaigns
