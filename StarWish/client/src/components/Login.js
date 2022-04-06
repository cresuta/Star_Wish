import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserProfileContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = (e) => {
    e.preventDefault();
    login({email, password})
      .then(r =>{
      if(r){
      navigate("/")
      }
      else{
        alert("Invalid email or password")
      }
    })
  };

  return (

    <div className="container">
    <img src={require('../imgs/app-logo.png')} alt="Star Wish Logo" className="app-logo"/>
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={loginSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Log In</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
			<div class="register">
                <p className="register-link"><a href='#'>Not a user? Sign up</a></p>
			</div>
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