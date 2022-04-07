import React, { useState, useContext } from "react";
import { Form } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useContext(UserProfileContext);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [displayName, setDisplayName] = useState();
  const [email, setEmail] = useState();
  const [profileImage, setProfileImage] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const registerClick = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords don't match. Do better.");
    } else {
      const userProfile = {
        firstName,
        lastName,
        displayName,
        profileImage,
        email,
      };
      register(userProfile, password).then(() => navigate("/"));
    }
  };

  return (
    <div className="container">
      <img
        src={require("../imgs/app-logo.png")}
        alt="Star Wish Logo"
        className="app-logo__signup"
      />
      <div className="screen2">
        <div className="screen__content2">
          <Form className="signup" onSubmit={registerClick}>
            <div className="signup__fieldcontainer1">
              <div className="signup__field">
              <i class="signup__icon bi bi-person"></i>
                <input
                  id="firstName"
                  type="text"
                  className="signup__input"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="signup__field">
              <i class="signup__icon bi bi-person"></i>
                <input
                  id="lastName"
                  type="text"
                  className="signup__input"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="signup__fieldcontainer2">
              <div className="signup__field">
              <i class="signup__icon bi bi-display"></i>
                <input
                  id="displayName"
                  type="text"
                  className="signup__input"
                  placeholder="Display Name"
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
              <div className="signup__field">
              <i class="signup__icon bi bi-card-image"></i>
                <input
                  id="profileImage"
                  type="text"
                  className="signup__input"
                  placeholder="Profile Image"
                  onChange={(e) => setProfileImage(e.target.value)}
                />
              </div>
            </div>
            <div className="signup__fieldcontainer3">
              <div className="signup__field">
              <i class="signup__icon bi bi-envelope"></i>
                <input
                  id="email"
                  type="email"
                  className="signup__input"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="signup__field">
              <i class="signup__icon bi bi-file-lock"></i>
                <input
                  id="password"
                  type="password"
                  className="signup__input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button className="button signup__submit">
              <span className="button__text">Sign up</span>
              <i class="button__icon bi bi-chevron-right"></i>
            </button>
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
