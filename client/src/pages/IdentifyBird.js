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
import BodyColorForm from "../components/MultiCheckboxes/BodyColorForm";
import HeadColorForm from "../components/MultiCheckboxes/HeadColorForm";

const IdentifyBird = () => {
  const [formData, setFormData] = useState({
    size: "",
    bodyColor: "",
    headColor: "",
  });

  const [logBird, { error, data }] = useMutation(LOG_BIRD);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await logBird({
        variables: { ...formData },
      });
      setFormData("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    console.log(value + " value selected");
    console.log(name);

    setFormData({
      ...formData,
      [name]: value,
    });

    console.log([name] + " formData");
  };
  return (
    <Container fluid className="identifyBird">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard">
            <Form onSubmit={handleFormSubmit} className="form-box-id">
              <h2>Identify a bird</h2>
              <Form.Group
                className="mb-3 formGroup"
                controlId="size"
                onChange={handleChange}
              >
                <Form.Label>What size was the bird?</Form.Label>
                <br></br>
                <Form.Select name="size" className="select-box">
                  <option key="blankChoice" hidden>
                    {" "}
                    bird size
                  </option>
                  <option>Large</option>
                  <option>Medium</option>
                  <option>Small</option>
                </Form.Select>
              </Form.Group>
              <BodyColorForm />
              <br></br>
              <HeadColorForm />
              <br></br>
              <Button
                variant="primary"
                type="submit"
                className="btn submit-btn"
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

export default IdentifyBird;
