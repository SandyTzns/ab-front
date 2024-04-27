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
    removeToken: (currentSlice) => {
      currentSlice.token = "";
    },
    addUser: (currentSlice, action) => {
      currentSlice.id = action.payload.id;
      currentSlice.email = action.payload.email;
      currentSlice.firstName = action.payload.firstName;
      currentSlice.lastName = action.payload.lastName;
    },
  },
});

const { addUser, addToken, removeToken } = authSlice.actions;
export { addUser, addToken, removeToken };
