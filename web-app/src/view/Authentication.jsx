import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Authentication() {
	const [isLogin, setIsLogin] = useState(true);

	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/home");
	};

	const handleSignup = () => {
		navigate("/home");
	};

	const Login = () => {
		return (
			<div>
				<div>
					<label htmlFor="login-email">Enter Your Email</label>
					<input
						id="login-email"
						type="email"
						placeholder="Enter Your Email"
						alt="login email input"
					/>
					<label htmlFor="login-password">Enter Your Password</label>
					<input id="login" type="password" placeholder="Enter Your Password" />
					<button type="submit" onClick={handleLogin}>
						Login
					</button>
				</div>
				<div>
					<p>Dont Have an Account? </p>
					<button onClick={() => setIsLogin(false)}>Sign Up</button>
				</div>
			</div>
		);
	};

	const SignUp = () => {
		return (
			<div>
				<div>
					<label htmlFor="signup-email">Enter Your Email</label>
					<input
						id="signup-email"
						type="email"
						placeholder="Enter Your Email"
						alt="login email input"
					/>
					<label htmlFor="signup-password">Enter Your Password</label>
					<input
						id="signup-password"
						type="password"
						placeholder="Enter Your Password"
					/>
					<label htmlFor="signup-repassword">Re - Enter Your Password</label>
					<input
						id="signup-repassword"
						type="password"
						placeholder="Re - Enter Your Password"
					/>
					<button type="submit" onClick={handleSignup}>
						Sign Up
					</button>
				</div>
				<div>
					<p>Already Have an Account? </p>
					<button onClick={() => setIsLogin(true)}>Login</button>
				</div>
			</div>
		);
	};

	return <div>{isLogin ? <Login /> : <SignUp />}</div>;
}
