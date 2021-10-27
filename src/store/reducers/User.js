import {createReducer} from "@reduxjs/toolkit"
import {ADD_USER,LOGIN_USER, LOGOUT_USER} from "../Actions/userAction"
import {apiBegan} from "../Actions/Apiaction"
let lastid=0
export const userReducer=createReducer(({users:[]}),{
    [ADD_USER.type]:(state,action)=>{
     state.users.push({
         id:++lastid,
         description:action.payload
     })
    },
    [LOGOUT_USER.type]:(state,action)=>{
        state.user=null
    }
})

export const selectUser =(state)=>state.user.user
//Action Creators
const url="/Signup"
export const addingUser=user=>apiBegan({
    onStart:apiBegan.type,
    url,
    method:"post",
    data:user,
    onSuccess:ADD_USER.type
})