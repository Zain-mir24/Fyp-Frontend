import { createReducer } from "@reduxjs/toolkit";
import {
  ADD_USER,
  DONATION,
  LOGIN_USER,
  LOGOUT_USER,
} from "../Actions/userAction";
import { apiBegan, apiFail } from "../Actions/Apiaction";
let lastid = 0;
const initialState = {
  users: [],
  user: null,
  // donation: false
};
export const userReducer = createReducer(initialState, {
  [ADD_USER.type]: (state, action) => {
    state.users.push({
      id: ++lastid,
      description: action.payload,
    });
  },
  [LOGIN_USER.type]: (state, action) => {
    state.user = action.payload;
  },
  [LOGOUT_USER.type]: (state, action) => {
    state.user = null;
  },
  // [DONATION.type]: (state, action) => {
  //   state.donation = true
  // }
});

export const selectUser = (state) => state.persistedReducer.user.user;
// export const checkDonation = (state) => state.persistedReducer.donation;

//Action Creators

//User signup url
const url =
  "https://pacific-refuge-71507.herokuapp.com/User/Signup/:_id/:token";
export const addingUser = (user) =>
  apiBegan({
    onStart: apiBegan.type,
    method: "post",
    url,
    data: user,
    onSuccess: ADD_USER.type,
  });
//Admin signup url
const adminurl = "https://pacific-refuge-71507.herokuapp.com/Admin/Signup";
export const addingAdmin = (admin) =>
  apiBegan({
    onStart: apiBegan.type,
    method: "post",
    url: adminurl,
    data: admin,
    onSuccess: ADD_USER.type,
  });
