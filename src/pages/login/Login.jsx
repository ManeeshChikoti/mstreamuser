import React from "react";
import { useContext, useState } from "react";
import { loginCall } from "../../authContext/Apicalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {dispatch}=useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({email,password},dispatch)
  }

  return (
    <div className="loginpage">
      <div className="top">
        <div className="wrapper">
          <span>MStream</span>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginbutton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to MStream ? <b>Sign up now</b>
          </span>
        </form>
      </div>
    </div>
  );
}
