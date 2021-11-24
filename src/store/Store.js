import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducers/Rootreducer";
import api from "../middleware/Api"

export const store=configureStore({
    reducer,
    middleware:[...getDefaultMiddleware(),api]
})