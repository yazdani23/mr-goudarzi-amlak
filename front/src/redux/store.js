import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slice/userSlice.js'

const Store = configureStore({
  reducer: {
    // reducers
    user: userReducer,
  },
});

export default Store;
