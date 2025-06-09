import React from "react";
import "../CSS/Login_Form.css";
import { Link } from "react-router";
import { useState } from "react";
import { Register_Post } from "../Api/Login_Post";
import { useNavigate } from "react-router";

const write = () => {
  console.log("Kliknięto guziora");
};

const Register_Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [email, setemail] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    console.log("Podjęto próbę Rejestracji");
    e.preventDefault();
    if (password === cpassword) {
      try {
        await Register_Post(login, email, password);
        console.log("Utworzono nowe konto!");
        navigate("/Login");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Hasła nie są identyczne");
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
        <h1>Register</h1>
        <p>Fill up the form to create an account</p>
        <div className="Forms">
          <form onSubmit={handleRegister}>
            <div className="login-form">
              <label htmlFor="login-input">Create Login: </label>
              <input
                type="text"
                value={login}
                className="login-input"
                id="login-input"
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className="e-mail-form">
              <label htmlFor="e-mail">e-mail: </label>
              <input
                type="text"
                value={email}
                className="e-mail-input"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>

            <div className="Password-form">
              <label htmlFor="password-input">Password: </label>
              <input
                type="text"
                value={password}
                className="password-input"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="cPassword-form">
              <label htmlFor="cpassword-input">confirm Password: </label>
              <input
                type="text"
                value={cpassword}
                className="cpassword-input"
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>

            <button className="button" type="submit">
              Register
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

export default Register_Form;
