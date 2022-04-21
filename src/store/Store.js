import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from "./reducers/Rootreducer";
import api from "../middleware/Api"
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: {
        persistedReducer
    }
    ,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [...getDefaultMiddleware(), api]
})
let persistor = persistStore(store);

export { store, persistor }