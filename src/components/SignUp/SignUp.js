import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleCreateUser = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Your confirm password did not match.");
    }
    createUserWithEmailAndPassword(email, password)
  };

  return (
    <div className="form-container" onSubmit={handleCreateUser}>
      <div>
        <h2 className="form-title">SignUp</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              required
              onBlur={handleEmailBlur}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id=""
              required
              onBlur={handlePassword}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="password"
              id=""
              required
              onBlur={handleConfirmPassword}
            />
          </div>
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <span style={{ color: "red" }}>{error}</span>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/login">
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
