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
    addUser: (currentSlice, action) => {
      currentSlice.users.push(action.payload);
    },
  },
});

const { addUser } = authSlice.actions;
export { addUser };
