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

const Signup = (props) => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
    console.log({ ...formState });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(formState);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container fluid className="signup">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCardSign mt-4 mb-5">
            <Form
              onSubmit={handleFormSubmit}
              className="form-box-sign"
            >
              <h2>Signup</h2>
              <Form.Group
                className="mb-3 formGroupSign"
                controlId="formBasicUsername"
              >
                <Form.Label>Username: </Form.Label>
                <Form.Control
                  value={formState.username}
                  onChange={handleChange}
                  placeholder="username"
                  type="username"
                  name="username"
                  className="custom-form custom-form-sign"
                />
                <Form.Text className="text-muted">
                  <br></br>
                  This is the name of your Birdnerd profile
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 formGroupSign"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address: </Form.Label>
                <Form.Control
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="your email"
                  type="email"
                  name="email"
                  className="custom-form-sign"
                />
                <Form.Text className="text-muted">
                  <br></br>
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group
                className="mb-3 formGroupSign"
                controlId="formBasicPassword"
              >
                <Form.Label>Password: </Form.Label>
                <Form.Control
                  value={formState.password}
                  name="password"
                  onChange={handleChange}
                  type="password"
                  placeholder="*****"
                  className="custom-form-sign"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn submit-btn submit-btn-sign"
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

export default Signup;
