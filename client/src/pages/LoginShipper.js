import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginShipper } from "../store";
import { Container, Form, Button } from "react-bootstrap";
import './Login.css'

function LoginShipper(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.clear();
    const payload = {
      email,
      password,
    };
    dispatch(setLoginShipper(payload));
    setTimeout(() => {
      history.push("/shipper");
    }, 1000);
  };

  const handleRegister = () => {
    history.push("/shipper-register");
  };

  const toHome = () => {
    history.push("/");
  };
  return (
    <>
      <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    Sign In As Shipper
                </div>
                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form className='inputLogin' onSubmit={(e) => handleLogin(e)}>
                            <div class="form-group">
                                <label class="form-control-label">EMAIL</label>
                                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control"></input>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" i></input>
                            </div>

                            <div class="col-lg-12 loginbttm">
                              <div class="col-lg-6 login-btn login-text">
                                  <button type="submit" class="mr-2 btn btn-outline-primary">Sign In</button>
                                  <button onClick={() => toHome()} type="submit" class="btn btn-outline-primary">Back</button>
                                <p className='mt-3' role="button" onClick={() => handleRegister()}>Don't have an account?</p>   
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
          {/* <div class="col-lg-3 col-md-2">
            <button
              onClick={(e) => handleLogin(e)}
              type="submit"
              class="btn btn-outline-primary"
            >
              Sign In
            </button>
            <button
              onClick={() => toHome()}
              type="submit"
              class="btn btn-outline-primary mb-5"
            >
              Back
            </button>
          </div> */}
        </div>
    </>
  );
}

export default LoginShipper;
