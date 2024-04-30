import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import argentBankLogo from "../../images/argentBankLogo.png";
import { useSelector } from "react-redux";
import { resetUser } from "../../store/auth/auth-slice";

export default function AdminNav() {
  const firstName = useSelector((state) => state.AUTH.firstName);

  const dispatch = useDispatch();
  async function logOut(e) {
    e.preventDefault();
    dispatch(resetUser());
  }

  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="./">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink className="main-nav-item" to="#">
            <i className="fa fa-user-circle"></i>
            {firstName}
          </NavLink>
          <button type="submit" onClick={logOut}>
            <NavLink className="main-nav-item" to="/./">
              <i className="fa fa-sign-out"></i>
              Sign Out
            </NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
}
