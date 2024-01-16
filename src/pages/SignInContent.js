import React from "react";
import "../styles/main.css";

export default function SignInContent() {
  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label>Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label>Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label>Remember me</label>
          </div>

          <a href="./user.html" className="sign-in-button">
            Sign In
          </a>
        </form>
      </section>
    </div>
  );
}
