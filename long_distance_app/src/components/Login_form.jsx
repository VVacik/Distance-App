import React, { use } from "react";
import "../CSS/login_form.css";
import { Link } from "react-router";
import { Login_Post } from "../Api/Login_Post.js";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../Api/AuthContext.jsx";

const Login_form = () => {
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await Login_Post(loginInput, password);
      login(data.token, data);
      alert("Zalogowano");
      navigate("/myPage");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="left">
        <div className="Logolog">
          <Link className="Back" to="/">
            Distance APP
          </Link>
        </div>
      </div>
      <div className="login-box">
        <h1>Login Here!!!</h1>
        <p>login here using your username and password</p>
        <div className="Forms">
          <form onSubmit={handleLogin}>
            <div className="login-form">
              <label htmlFor="login">Login: </label>
              <input
                type="login"
                value={loginInput}
                onChange={(e) => setLoginInput(e.target.value)}
                className="login-input"
              />
            </div>
            <div className="Password-form">
              <label htmlFor="password">Password: </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="password-input"
              />
            </div>
            <button className="button" type="submit">
              LogIn
              <div className="hoverEffect">
                <div></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login_form;
