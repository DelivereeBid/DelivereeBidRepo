import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSignUp, setSignUpShipper } from "../store";
import { Container, Form, Button } from "react-bootstrap";
import './Register.css'

function RegisterTranspotter(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [fileee, setFileee] = useState("");
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    vehicle: "",
    file: "",
  });

  document.body.style = 'background: #0099ff;';

  const changeInput = (e) => {
    const newInput = {
      ...user,
    };
    newInput[e.target.name] = e.target.value;
    setUser(newInput);
  };

  const changeInputFile = (e) => {
    const newInput = {
      ...user,
    };
    setFileee(e.target);
    newInput.file = e.target.files[0];
    setUser(newInput);
  };

  const handleRegisterTransporter = (e) => {
    e.preventDefault()
    if(user.username !== "" && user.email !== "" && user.password !== "" && user.file !== "" && user.vehicle !== ""){
      history.push("/transporter-login");
    }
    dispatch(setSignUp(user));
  };

  const handleRegisterShipper = (e) => {
    e.preventDefault();
    if(user.username !== "" && user.email !== "" && user.password !== "" && user.file !== ""){
      history.push("/shipper-login")
    }
    dispatch(setSignUpShipper(user));
  };

  const toLoginShipper = () => {
    history.push("/shipper-login")
  }
  
  const toLoginTransporter = () => {
    history.push("/transporter-login");
  }

  return (
    <>
      <div class="container register mt-5 shadow-content">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""></img>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from becoming our member!</p>
                        <input type="submit" onClick={() => toLoginTransporter()} value="Login"></input>
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
                                <h3 class="register-heading">Apply as a Transporter</h3>
                                <div class="column register-form">
                                  <form onSubmit={(e) => handleRegisterTransporter(e)}>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="username" placeholder="Username *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" placeholder="Email *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" placeholder="Password *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                          <input type="file" name="profile_picture" onChange={(e) => changeInputFile(e)}></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="vehicle" placeholder="Vehicle *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <input type="submit" class="btnRegister" value="Register"></input>
                                    </div>
                                    </form>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3 class="register-heading">Apply as a Shipper</h3>
                                <div class="column register-form">
                                  <form onSubmit={(e) => handleRegisterShipper(e)}>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="username" placeholder="Username *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" name="email" placeholder="Email *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" name="password" placeholder="Password *" onChange={(e) => changeInput(e)}></input>
                                        </div>
                                        <div class="form-group">
                                          <input type="file" name="profile_picture" onChange={(e) => changeInputFile(e)}></input>
                                        </div>
        
                                        <input type="submit" class="btnRegister" value="Register"></input>
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

export default RegisterTranspotter;
