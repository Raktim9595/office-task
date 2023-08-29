import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthTokenReduxInterface } from "../interfaces/userRedux";

const initialState: AuthTokenReduxInterface = {
  authToken: "",
  refreshToken: "",
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthTokenReduxInterface>) => {
      state.authToken = action.payload.authToken;
      state.refreshToken = action.payload.refreshToken;
    },
    // setRefreshToken: (state, action: PayloadAction<AuthTokenReduxInterface>) => {
    //   state.refereshToken = action.payload.refereshToken
    // },
    removeToken: (state) => {
      state.authToken = "";
      state.refreshToken = "";
    }
  }
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;