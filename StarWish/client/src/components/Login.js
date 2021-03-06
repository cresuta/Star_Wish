import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import { Form } from "reactstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserProfileContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({ email, password }).then((r) => {
      if (r) {
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    });
  };

  return (
    <div className="login__container">
      <img
        src={require("../imgs/app-logo.png")}
        alt="Star Wish Logo"
        className="app-logo__login"
      />
      <div className="screen">
        <div className="screen__content">
          <Form className="login" onSubmit={loginSubmit}>
            <div className="login__field">
			<i class="login__icon bi bi-envelope"></i>
              <input
                id="email"
                type="text"
                className="login__input"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__field">
			<i class="login__icon bi bi-file-lock"></i>
              <input
                id="password"
                type="password"
                className="login__input"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In</span>
              <i class="button__icon bi bi-chevron-right"></i>
            </button>
            <div class="register">
              <Link className="register-link" to="/register">
                Not a user? Sign up
              </Link>
            </div>
          </Form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
