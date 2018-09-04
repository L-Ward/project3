import React from "react";
import "./Account.css";
import Login from "../../components/Login";

const Account = (props) => (
  < div className="container" >
    <Login {...props} />
  </div >
);

export default Account;