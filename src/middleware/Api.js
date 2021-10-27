import { apiBegan, apiSuccess, apiFail } from "../store/Actions/Apiaction";
import axios from "axios";
const api =({dispatch})=>(next)=>async(action)=>{
  if(action.type !== apiBegan.type) return next(action)
  const{url,method,data,onSuccess} =action.payload;

  try{  
    const result= await axios.request({
        baseURL:process.env.BASE_URL,
        url,
        method,
        data
    })
    if(!result) {
      throw new Error('myerror');
    }
    dispatch(apiSuccess(data))
   if(onSuccess)  dispatch({type:onSuccess,payload:data})
  
  }catch(e){
    dispatch(apiFail(e.message))
    console.log(e)
  }


  }  

export default api;
