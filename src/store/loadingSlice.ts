import { createSlice } from "@reduxjs/toolkit"

import { LoadingState } from "../interfaces/userRedux"

const initialState: LoadingState = {
  loading: true
}

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = false;
    },
    resetLoading: (state) => {
      state.loading = true;
    }
  }
});

export const { setLoading, resetLoading } = loadingSlice.actions;

export default loadingSlice.reducer;