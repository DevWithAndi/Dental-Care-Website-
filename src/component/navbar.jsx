import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Logos">
        <img src="/logo.svg" alt="Error Logo" />
        <h1>Dental Scanner</h1>
      </div>
      <div className="NavText ">
        <p>Login</p>
        <p>Sign up</p>
      </div>
    </div>
  );
}

export default Navbar;
