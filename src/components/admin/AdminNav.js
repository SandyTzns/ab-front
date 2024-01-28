import React from "react";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../images/argentBankLogo.png";

export default function AdminNav() {
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
            Tony
          </NavLink>
          <NavLink className="main-nav-item" to="/./">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
