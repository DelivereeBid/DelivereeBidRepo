import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import { setLogin } from "../store";

function LoginPage(props) {
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
    dispatch(setLogin(payload));
    setTimeout(() => {
      history.push("/transporter");
    }, 1000);
  };

  const handleRegister = () => {
    history.push("/transporter-register");
  };

  const toHome = () => {
    history.push("/")
  }
  return (
    <>
    <Container>
        <Form onSubmit={(e) => handleLogin(e)}>
          <Form.Group>
            <h2 className="mb-3 mt-5">Sign In as Transporter</h2>

            <Form.Group controlId="form.email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Text as="div" className="text text-danger"></Form.Text>
            </Form.Group>

            <Form.Group>
            <Button variant="outline-primary" type="submit">
              Sign in
            </Button>
            <Button variant="outline-success" onClick={() => handleRegister()}>Create Transporter account?</Button>
            <Button variant="outline-danger" onClick={() => toHome()}>Cancel</Button>
            </Form.Group>
          </Form.Group>
        </Form>
        </Container>
    </>
  );
}

export default LoginPage;
