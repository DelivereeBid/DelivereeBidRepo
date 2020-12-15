import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setSignUpShipper } from "../store";
import { Container, Form, Button } from "react-bootstrap";

function RegisterShipper(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
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
    newInput.file = e.target.files[0];
    setUser(newInput);
  };

  console.log(user.file, 'line tiga tiga')
  const handleRegister = (e) => {
    e.preventDefault();
    if(user.username !== "" && user.email !== "" && user.password !== "" && user.file !== ""){
      history.push("/shipper-login")
    }
    dispatch(setSignUpShipper(user));
  };

  const toLoginShipper = () => {
    history.push("/shipper-login")
  }

  return (
    <>
      <Container>
        <Form onSubmit={(e) => handleRegister(e)}>
          <Form.Group>
            <h2 className="mb-3 mt-5">Sign Up as Shipper</h2>

            <Form.Group controlId="form.username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={(e) => changeInput(e)}
                type="username"
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
              <Form.File.Input onChange={(e) => changeInputFile(e)}></Form.File.Input>
            </Form.Group>

            <Form.Group>
              <Button variant="outline-primary" type="submit">
                Sign Up
              </Button>
              <Button
                variant="outline-success"
                onClick={() => toLoginShipper()}
              >
                Already have an account?
              </Button>
            </Form.Group>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}

export default RegisterShipper;
