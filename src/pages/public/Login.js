import Nav from "../../components/public/Nav";
import "../../styles/main.css";
import apiCalls from "../../service/apiCalls";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToken, addUser } from "../../store/auth/auth-slice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // When I submit the form, I send the email and password directly at apiCalls, who take them and make the call
  // then return me a token
  //that token I store it in Redux
  async function submit(e) {
    e.preventDefault();

    try {
      // api calls
      const token = await apiCalls.login(email, password);
      if (!token) throw new Error("Failed to retrieve a token");

      const user = await apiCalls.getUser(token);

      // dispatch to store
      dispatch(addToken(token));
      dispatch(addUser(user));

      //  enter the user page
      navigate("/login/profile");

      // catch the error if needed
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to log in. Please try again.");
    }
  }

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
              <input
                type="email"
                id="username"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-wrapper">
              <label>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
