import { createAction } from "@reduxjs/toolkit";
export const apiBegan=createAction("api/apiBegan")
export const apiSuccess= createAction("api/apiSuccess")
export const apiFail=createAction("api/apiFailed")