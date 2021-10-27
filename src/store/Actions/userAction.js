import { createAction } from "@reduxjs/toolkit";
export const ADD_USER=createAction("users/Signup")
export const LOGIN_USER= createAction("users/Login")
export const LOGOUT_USER=createAction("users/Logout")