import axios from "axios";

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

  // when we first log into the db, we get a token
  static getToken = async (email, password) => {
    try {
      let token = await axios.post(`${BASE_URL}/login`, { email, password });
      console.log(token);
    } catch (error) {
      console.log(error);
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
