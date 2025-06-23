import React, { useState } from "react";
import "../Css/Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Mock validation for demo purposes
    if (email === "test@greenify.com" && password === "123456") {
      // ✅ Successful login
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login">
      <Link to="/">
        <h2 className="login__logoText">Greenify</h2>
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form onSubmit={handleSignIn}>
          <h5>Email</h5>
          <input
            type="text"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login__signInButton" type="submit">
            Sign In
          </button>

          <p>
            By signing in, you agree to Greenify’s{" "}
            <span className="green-link">Terms of Use</span> and{" "}
            <span className="green-link">Privacy Policy</span>.
          </p>

          <button className="login__registerButton" type="button">
            Create your Greenify account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
