import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSignUp } from "../store";
import { Container, Form, Button } from "react-bootstrap";

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

  const handleRegister = (e) => {
    e.preventDefault()
    if(user.username !== "" && user.email !== "" && user.password !== "" && user.file !== "" && user.vehicle !== ""){
      history.push("/transporter-login");
    }
    dispatch(setSignUp(user));
  };
  
  const toLoginTransporter = () => {
    history.push("/transporter-login");
  }

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleRegister(e)}>
          <Form.Group>
            <h2 className="mb-3 mt-5">Create Transporter account</h2>

            <Form.Group controlId="form.username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => changeInput(e)}
                type="text"
                placeholder="Enter username"
                name="username"
              />
              <Form.Text as="div" className="text text-danger"></Form.Text>
            </Form.Group>
            
            <Form.Group controlId="form.email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={(e) => changeInput(e)}
                type="email"
                placeholder="Enter email"
                name="email"
              />
              <Form.Text as="div" className="text text-danger"></Form.Text>
            </Form.Group>

            <Form.Group controlId="form.password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={(e) => changeInput(e)}
              />
              <Form.Text as="div" className="text text-danger"></Form.Text>
            </Form.Group>
            <Form.Group controlId="form.picture">
              <Form.Label>Profile Picture</Form.Label>
              <Form.File.Input
                onChange={(e) => changeInputFile(e)}
              ></Form.File.Input>
            </Form.Group>
            <Form.Group controlId="form.vehicle">
              <Form.Label>Vehicle</Form.Label>
              <Form.Control
                onChange={(e) => changeInput(e)}
                type="text"
                placeholder="Enter vehicle"
                name="vehicle"
              />
              <Form.Text as="div" className="text text-danger"></Form.Text>
            </Form.Group>
            <Form.Group>
              <Button variant="outline-primary" type="submit">
                Sign Up
              </Button>
              <Button
                variant="outline-success"
                onClick={() => toLoginTransporter()}
              >
                Already have an account?
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>
      </Container>
      {/* <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 mb-3">
            <h3 class="signin-text mb-3">Register</h3>
            <form onSubmit={(e) => handleRegister()}>
              <div class="form-group">
                <label for="email">Email</label>
                <input onChange={(e) => changeInput(e)} type="email" name="email" class="form-control" />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input onChange={(e) => changeInput(e)} type="password" name="password" class="form-control" />
              </div>
              <div class="form-group">
                <label for="username">Username</label>
                <input onChange={(e) => changeInput(e)} type="text" name="username" class="form-control" />
              </div>
              <div class="form-group">
                <label for="username">Picture</label>
                <input onChange={(e) => changeInputFile(e)} type="file" name="file" class="form-control" />
              </div>
              <div class="form-group">
                <label className="mb-3" for="vehicle">Vehicle</label> <br></br>
                <input onChange={(e) => changeInput(e)} type="text" name="vehicle" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">Register</button>
              <p className="mt-3" role="button" onClick={() => handleRegister()}>Have an account ?</p>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default RegisterTranspotter;
