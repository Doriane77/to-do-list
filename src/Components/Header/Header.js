import React from "react";
import logo from "./Images/liste.png";

function Header() {
  return (
    <div className="Header">
      <div className="head-image">
        <img src={logo} alt="logo de leader" />
      </div>
      <h1>Todo List</h1>
    </div>
  );
}

export default Header;
