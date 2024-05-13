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
    newFirstName: "",
    newLastName: "",
    isUpdatedMode: false,
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
    resetUser: (currentSlice) => {
      currentSlice.id = "";
      currentSlice.email = "";
      currentSlice.firstName = "";
      currentSlice.lastName = "";
    },
    updateUser: (currentSlice, action) => {
      currentSlice.firstName = action.payload.newFirstName;
      currentSlice.lastName = action.payload.newLastName;
      currentSlice.isUpdatedMode = true;
    },
    logout: (currentSlice) => {
      currentSlice.token = "";
      currentSlice.isLogged = false;
      currentSlice.firstName = "";
      currentSlice.lastName = "";
      currentSlice.isUpdatedMode = false;
    },
  },
});

const { addToken, addUser, resetUser, updateUser, logout } = authSlice.actions;
export { addToken, addUser, resetUser, updateUser, logout };
