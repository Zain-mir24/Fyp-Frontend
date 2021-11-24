import { createReducer,createSelector } from "@reduxjs/toolkit";
import { ADD_USER, LOGIN_USER, LOGOUT_USER } from "../Actions/userAction";
import { apiBegan, apiFail } from "../Actions/Apiaction";
let lastid = 0;
const initialState = {
  users: [],
  user:null
};
export const userReducer = createReducer(initialState, {
  [ADD_USER.type]: (state, action) => {
    state.users.push({
      id: ++lastid,
      description: action.payload,
    });
  },
  [LOGIN_USER.type]:(state,action)=>{
  state.user=action.payload
  },
  [LOGOUT_USER.type]: (state, action) => {
    state.user = null;
  },
});

export const selectUser = (state) => state.user.user;
//Action Creators
const url = "/Signup";
export const addingUser = (user) =>
  apiBegan({
    onStart: apiBegan.type,
    method: "post",
    url,
    data: user,
    onSuccess: ADD_USER.type,
  });

