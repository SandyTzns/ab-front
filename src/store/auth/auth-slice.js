import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLogged: false,
    token: "",
    id: "",
    email: "",
    firstName: "",
    lastName: "",
  },
  reducers: {
    addToken: (currentSlice, action) => {
      currentSlice.token = action.payload;
    },
    addUser: (currentSlice, action) => {
      currentSlice.users.push(action.payload);
    },
  },
});

const { addUser, addToken } = authSlice.actions;
export { addUser, addToken };
