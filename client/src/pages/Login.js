import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.log(error);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          className="form-input"
          type="email"
          name="email"
          //   placeholder="enter your email"
          //   value={formState.email}
          //   onChange={handleChange}
        ></Form.Control>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="form-input"
          type="password"
          name="password"
          placeholder="*****"
          //   value={formState.password}
          //   onChange={handleChange}
        ></Form.Control>
      </Form.Group>

      <Button varient="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
