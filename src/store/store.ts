import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import tokenReducer from "./authTokenSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    token: tokenReducer,
    loading: loadingReducer,
  },
});

// infer type of rootState
export type RootState = ReturnType<typeof store.getState>;

// type of app dispatch
export type AppDispatch = typeof store.dispatch;
