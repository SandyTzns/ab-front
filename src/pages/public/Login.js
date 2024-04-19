// import { useDispatch } from "react-redux";
// import { addUser } from "../../store/auth/auth-slice";
// const dispatch = useDispatch();
// const BASE_URL = "http://localhost:3001/api/v1/user";
// const email = formData.get("email");
// const password = formData.get("password");

import Nav from "../../components/public/Nav";
import "../../styles/main.css";

import apiCalls from "../../service/apiCalls";
import { useState, useEffect } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  async function submit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setEmail(formData.get("email"));
    setPassword(formData.get("password"));
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiCalls.getToken(email, password);
      if (!response) return alert("cannot get API");
      setData(response.data);
    };
    fetchData();
  }, [email, password]);

  console.log(email, password);

  return (
    <>
      <Nav />
      <div className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={submit}>
            <div className="input-wrapper">
              <label>Username</label>
              <input type="email" id="username" name="email" />
            </div>

            <div className="input-wrapper">
              <label>Password</label>
              <input type="password" id="password" name="password" />
            </div>

            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>

            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </div>
    </>
  );
}

// voir le code plus bas
/** 
 let response;
    // retrieve TOKEN
    try {
      response = await axios.post(`${BASE_URL}/login`, { email, password });
      console.log(response); // response with TOKEN

      let config = {
        headers: {
          Authorization: `Bearer ${response.data.body.token}`,
        },
      };
      // send TOKEN to get email, firstname, id, lastName
      let user = await axios.post(`${BASE_URL}/profile`, null, config);
      console.log(user);
      console.log(user.data.body.email);
      console.log(user.data.body.firstName);
      console.log(user.data.body.id);
      console.log(user.data.body.lastName);
    } catch (error) {
      console.log(error);
    }
    // dispatch(addUser(user));

    */
