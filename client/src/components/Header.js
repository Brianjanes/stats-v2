import "../styles/Header.css";
import React from "react";
import { useUser, UserButton } from "@clerk/clerk-react";

const Header = () => {
  const { user } = useUser();

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
            <a href="/sign-in/*">Login</a>
            <a href="/sign-up/*">Register</a>
          </div>
        ) : (
          <div className="bottom-header-right">
            <a href="/profile">Dashboard</a>
            <UserButton />
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
