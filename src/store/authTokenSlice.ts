import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthTokenReduxInterface } from "../interfaces/userRedux";

const initialState: AuthTokenReduxInterface = {
  authToken: "",
  // authToken: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthTokenReduxInterface>) => {
      state.authToken = action.payload.authToken;
    },
    removeToken: (state) => {
      state.authToken = "";
    }
  }
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;