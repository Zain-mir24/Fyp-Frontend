import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./Allreducer";

export const store=configureStore({
    reducer
})