import "../styles/Header.css";
import React from "react";

const Header = ({ user }) => {
  return (
    <div className="main-header">
      <header>
        <div className="top-header">
          <h2>brainstorm</h2>
        </div>
      </header>
      <nav>
        {!user ? (
          <div className="bottom-header-right">
            <a href="#">Login</a>
            <a href="#">Register</a>
          </div>
        ) : (
          <div className="bottom-header-right">
            <a href="#">Dashboard</a>
            <a href="#">Logout</a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
