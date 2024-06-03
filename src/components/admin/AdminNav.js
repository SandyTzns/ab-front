import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import argentBankLogo from "../../images/argentBankLogo.png";
import { logout } from "../../store/auth/auth-slice";

export default function AdminNav() {
  const firstName = useSelector((state) => state.AUTH.firstName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logOut(e) {
    e.preventDefault();
    dispatch(logout());
    navigate("/./");
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
          <NavLink className="main-nav-item" to="/./" onClick={logOut}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
