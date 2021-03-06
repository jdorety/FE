import React, { useState } from "react";
import axios from "axios";
import axioswithAuth from "../../utils/axios";
import "./Signup.css";
const initalState = {
  username: "",
  email: "",
  password1: "",
  password2: ""
};

const baseUrl = process.env.REACT_APP_API_BASE_URL || "https://cs25-bw-be.herokuapp.com";

const SignUp = props => {
  const [users, setUsers] = useState({ initalState });

  const handleChange = e => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios.post(`${baseUrl}/api/registration/`, users).then(res => {
      console.log("I am here", res);
      props.history.push("/LogIn");
    });
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="username" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={users.username}
            onChange={handleChange}
            pattern="^[a-zA-Z0-9_.-]*$"
            required
          />
        </div>

        <div className="input">
          <label htmlFor="email" />
          <input
            id="pass1"
            type="text"
            name="email"
            placeholder="email"
            value={users.email}
            onChange={handleChange}
          />
        </div>

        <div className="input">
          <label htmlFor="password" />
          <input
            type="password"
            name="password1"
            placeholder="password"
            value={users.password1}
            onChange={handleChange}
            maxLength="24"
            minLength="8"
            required
          />
        </div>

        <div className="input">
          <label htmlFor="password-re" />
          <input
            type="password"
            name="password2"
            placeholder="password_re"
            value={users.password2}
            onChange={handleChange}
            ma
            maxLength="24"
            minLength="8"
            required
          />
        </div>
        <button className="btn" type="submit">
          Submit Button
        </button>
      </form>
    </div>
  );
};

export default SignUp;
