import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";
import { LOG_BIRD } from "../utils/mutations";
import "../styles/IdentifyBird.css";

const IdentifyBird = () => {
  const [bird, setBird] = useState({
    size: "",
    bodyColor: "",
    headColor: "",
  });

  const [logBird, { error, data }] = useMutation(LOG_BIRD);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setBird({
      ...bird,
      [name]: value,
    });
    console.log([name] + "name");
    console.log(bird);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(bird);
  };
  return (
    <Container fluid className="identifyBird">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard">
            <Form onSubmit={handleFormSubmit}>
              <h2>Identify a bird</h2>
              <Form.Group
                className="mb-3"
                controlID="birdSize"
                onChange={handleChange}
              >
                <Form.Label>What size was the bird?</Form.Label>

                <Form.Select>
                  <option key="blankChoice" hidden>
                    {" "}
                    bird size
                  </option>
                  <option>Large</option>
                  <option>Medium</option>
                  <option>Small</option>
                </Form.Select>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="bodyColor"
                onChange={handleChange}
              >
                <Form.Label>What color was its body?</Form.Label>
                <Form.Text className="textMuted">
                  (check all that apply)
                </Form.Text>
                <Form.Check type="checkbox" label="black"></Form.Check>
                <Form.Check type="checkbox" label="white"></Form.Check>
                <Form.Check type="checkbox" label="brown"></Form.Check>
                <Form.Check type="checkbox" label="yellow"></Form.Check>
                <Form.Check type="checkbox" label="red"></Form.Check>
                <Form.Check type="checkbox" label="blue"></Form.Check>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="headColor"
                onChange={handleChange}
              >
                <Form.Label>What color was its head?</Form.Label>
                <Form.Text className="textMuted">
                  (check all that apply)
                </Form.Text>
                <Form.Check type="checkbox" label="black"></Form.Check>
                <Form.Check type="checkbox" label="white"></Form.Check>
                <Form.Check type="checkbox" label="brown"></Form.Check>
                <Form.Check type="checkbox" label="yellow"></Form.Check>
                <Form.Check type="checkbox" label="red"></Form.Check>
                <Form.Check type="checkbox" label="blue"></Form.Check>
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

export default IdentifyBird;
