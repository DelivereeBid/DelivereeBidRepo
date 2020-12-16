import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setLoginShipper, setLogin } from "../store";
import { Container, Form, Button } from "react-bootstrap";
import './Login.css'

function LoginShipper(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginShipper = (e) => {
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

  const handleLoginTransporter = (e) => {
    e.preventDefault();
    localStorage.clear();
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
    history.push("/shipper-register");
  };

  const toHome = () => {
    history.push("/");
  };
  return (
    <>
      {/* <div class="container">
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
                        <form className='inputLogin' onSubmit={(e) => handleLoginShipper(e)}>
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
          <div class="col-lg-3 col-md-2">
            <button
              onClick={(e) => handleLoginShipper(e)}
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
          </div>
        </div> */}
      <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://i.ibb.co/tM658ZS/user.jpg" alt=""></img>
                        <h3>Welcome</h3>
                        <p>You are 5 seconds away from enjoying our web app!</p>
                        <input type="submit" onClick={() => handleRegister()} value="Register"></input>
                    </div>
                    <div class="col-md-9 register-right">
                        <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Transporter</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Shipper</a>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Login as a Transporter</h3>
                                <div class="column register-form">
                                  <form onSubmit={(e) => handleLoginTransporter(e)}>
                                    <div class="col-md-6">
                      
                                        <div class="form-group">
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" name="email" placeholder="Email *" ></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" name="password" placeholder="Password *" ></input>
                                        </div>
                                       
                                        <input type="submit" class="btnRegister" value="Login"></input>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 class="register-heading">Login as a Shipper</h3>
                                <div class="column register-form">
                                  <form onSubmit={(e) => handleLoginShipper(e)}>
                                    <div class="col-md-6">
                                        
                                        <div class="form-group">
                                            <input type="email" onChange={(e) => setEmail(e.target.value)} class="form-control" name="email" placeholder="Email *" ></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} class="form-control" name="password" placeholder="Password *" ></input>
                                        </div>
                                       
                                        <input type="submit" class="btnRegister" value="Login"></input>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
              </div>
    </>
  );
}

export default LoginShipper;
