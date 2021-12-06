import React,{useEffect,useState} from 'react'
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
 
    return (
        <div>
            Im appealed by some beneficiary
            <button onClick={()=>{
                viewData()
            }} >
                Request
            </button>
        </div>
    )
}

export default AppealedCampaigns
