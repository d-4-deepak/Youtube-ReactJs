import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./appSlice"
import searchSlice from  "./searchSlice"
import chatSlice from './chatSlice'
import searchQuerySlice from './searchQuerySlice'

const store = configureStore({
    reducer:{
    app: appSliceReducer,
    search : searchSlice,
    chat : chatSlice,
    searchQuery : searchQuerySlice
    }
})

export default store;