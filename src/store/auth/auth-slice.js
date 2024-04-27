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
      currentSlice.isLogged = true;
    },
    addUser: (currentSlice, action) => {
      currentSlice.id = action.payload.id;
      currentSlice.email = action.payload.email;
      currentSlice.firstName = action.payload.firstName;
      currentSlice.lastName = action.payload.lastName;
    },
    removeToken: (currentSlice) => {
      currentSlice.token = "";
      currentSlice.isLogged = false;
    },
  },
});

const { addToken, addUser, removeToken } = authSlice.actions;
export { addToken, addUser, removeToken };
