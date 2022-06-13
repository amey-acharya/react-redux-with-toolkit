import { createSlice } from "@reduxjs/toolkit";


const isAuthenticatedSlice = createSlice({
    name: "authentication",
    initialState: { isAuthenticated: false },
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });

  export const authActions = isAuthenticatedSlice.actions;
  export default isAuthenticatedSlice.reducer;