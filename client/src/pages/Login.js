import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Auth from "../utils/auth";
import "../styles/Login.css";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  console.log(formState);
  const [login, { error }] = useMutation(LOGIN_USER);
  console.log(error + "error");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });

      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container fluid className="login">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCardLogin mt-4 mb-5">
            <Form
              onSubmit={handleFormSubmit}
              className="form-box-login"
            >
              <h2>Login</h2>
              {/* EMAIL INPUT */}
              <Form.Group
                className="mb-3 formGroupLogin"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  value={formState.email}
                  placeholder="Enter email"
                  onChange={handleChange}
                  className="custom-form-login"
                />
                <br></br>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              {/* PASSWORD INPUT */}
              <Form.Group
                className="mb-3 formGroupLogin"
                controlId="formBasicPassword"
              >
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  value={formState.password}
                  placeholder="******"
                  onChange={handleChange}
                  className="custom-form-login"
                />
              </Form.Group>
              {error ? (
                <div>
                  <p className="error-text">
                    The provided credentials are incorrect
                  </p>
                </div>
              ) : null}
              {/* SUBMIT BUTTON */}
              <Button
                variant="primary"
                type="submit"
                className="btn submit-btn submit-btn-login"
              >
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
