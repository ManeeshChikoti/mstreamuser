import React, { useRef, useState } from "react";
import "./register.scss";
import { axiosInstance } from "../../axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isAdmin, setisAdmin] = useState(false);
  let navigate = useNavigate();

  const emailRef = useRef();

  const handleStart = () => {
    setemail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("auth/register", { email, username, password, isAdmin });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <span>MStream</span>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited Movies, Series and More</h1>
        <h2>Watch anywhere</h2>
        <p>Enter your mail to create an account</p>
        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Click here
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="select">
              <label>isAdmin:</label>
              <select
                onChange={(e) => {
                  let selected = e.target.value;
                  if (selected === "true") {
                    setisAdmin(true);
                  } else {
                    setisAdmin(false);
                  }
                }}
              >
                <option value="false">Default</option>
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <button className="registerButton" onClick={handleFinish}>
              Happy Streaming
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
