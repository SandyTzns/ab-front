import React from "react";
import Nav from "../../components/admin/AdminNav";
import "../../styles/main.css";
import "../../styles/user.css";
import axios from "axios";
import Greetings from "../../components/admin/Greetings";
import AccountType from "../../components/admin/AccountType";

export default function User() {
  return (
    <>
      <Nav />
      <main className="admin-bg-dark">
        <Greetings />
        <AccountType />
      </main>
    </>
  );
}
