import React, { useEffect } from "react";
import { Link } from "react-router";
import "../CSS/NavBar.css";
import { useState } from "react";
import { getProfile } from "../Api/Login_Post";
import { useAuth } from "../Api/AuthContext.jsx";

const languages = [
  { code: "en", name: "🇬🇧" },
  { code: "pl", name: "🇵🇱" },
  { code: "de", name: "🇩🇪" },
  { code: "fr", name: "🇫🇷" },
];

export default function NavBar() {
  const { user, isLoggedIn, loading, logout } = useAuth();

  const Status = () => {
    console.log("zalogowano:", isLoggedIn);
    console.log(user);
  };

  if (loading) return null;
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="Logo" to="/">
          Distance APP
        </Link>
      </div>

      <div className="navbar-center"></div>

      <div className="navbar-right">
        {!isLoggedIn ? (
          <>
            <Link className="Linker register" to="/register">
              Register
            </Link>
            <Link className="Linker login" to="/login">
              Login
            </Link>
            <button onClick={Status}> Status </button>
          </>
        ) : (
          <>
            <Link className="Linker center-link" to="/MyPage">
              My Wardrobes
            </Link>
            <span className="username">user: {user?.username}</span>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </>
        )}
        <select name="Language" id="lang" className="language-select">
          {languages.map((lang) => (
            <option value={lang.code} key={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}
