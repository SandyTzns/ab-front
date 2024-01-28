import React from "react";
import { NavLink } from "react-router-dom";
import argentBankLogo from "../../images/argentBankLogo.png";

export default function AdminNav() {
  return (
    <header>
      <nav className="main-nav">
        <NavLink to="./" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div>
          <NavLink to="/signIn" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Signed Out
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
