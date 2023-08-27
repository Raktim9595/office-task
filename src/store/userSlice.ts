import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { LoggedInUser } from "../interfaces/userRedux";

const initialState: LoggedInUser = {
  name: "",
  email: "",
  phoneNumber: "",
  id: Number(""),
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoggedInUser>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.phoneNumber = action.payload.phoneNumber;
    },
    removeUser: (state) => {
      state.email = "";
      state.id = Number("");
      state.phoneNumber = "";
      state.name = "";
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;