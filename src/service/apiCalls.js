import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken, addUser } from "../store/auth/auth-slice";
// const dispatch = useDispatch();

const BASE_URL = "http://localhost:3001/api/v1/user";

export default class apiCalls {
  // when we want to add a new user into the db
  static addNewUser = async (firstName, lastName, email, password) => {
    try {
      let newUser = await axios.post(`${BASE_URL}/signup`, {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(newUser);
    } catch (error) {
      console.log(error);
    }
  };

  // when we first log into the db, we get a token, here we return the token so Login can store it using Dispatch
  static getToken = async (email, password) => {
    try {
      let tokenResponse = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log(tokenResponse.data.body.token);
      return tokenResponse.data.body.token;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // when we want to check with the token if this user is in the db to give access
  static getUser = async (token) => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let user = await axios.post(`${BASE_URL}/profile`, null, config);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  //when we want to update the user
  static updateUser = async (token, firstName, lastName) => {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      let user = await axios.put(
        `${BASE_URL}/profile`,
        { firstName, lastName },
        config
      );
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
}
