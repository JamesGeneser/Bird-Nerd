import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Auth from "../utils/auth";
import "../styles/Signup.css";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container fluid className="signup">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard mt-4 mb-5">
            <Form onSubmit={handleFormSubmit}>
              <h2>Signup</h2>
              <Form.Group
                className="mb-3"
                controlId="formBasicUsername"
                value={formState.username}
                onChange={handleChange}
                placeholder="username"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter a username" />
                <Form.Text className="text-muted">
                  This is the name of your Birdnerd profile
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                value={formState.email}
                onChange={handleChange}
                placeholder="your email"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
                value={formState.password}
                name="password"
                onChange={handleChange}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*****" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
