import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    //TODO: post: postSlice
    //NOTE: add more slices here for posts

  },
});

export default store;
