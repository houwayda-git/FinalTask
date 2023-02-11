import { configureStore } from '@reduxjs/toolkit'
import rdvReducer from "./rdvSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

export const store = configureStore({
    reducer: { rdv: rdvReducer },
})