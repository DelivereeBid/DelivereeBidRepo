import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "../store";

function LoginPage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(setLogin(payload));
    setTimeout(() => {
      history.push("/transporter");
    }, 1000);
  };

  const handleRegister = () => {
    history.push("/transporter-register");
  };
  return (
    <>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <h3 class="signin-text mb-3">Login</h3>
            <form onSubmit={(e) => handleLogin(e)}>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Sign In
              </button>
              <p role="button" onClick={() => handleRegister()}>
                Don't have any account yet?
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
