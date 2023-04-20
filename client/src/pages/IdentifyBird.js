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

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    // const {name, value} = event.target
    const value = event.target.value;
    const name = event.target.name;

    const colorGroup = event.target.parent;
    console.log(colorGroup);
    const checked = event.target.checked;

    console.log(value + " value selected");
    console.log(name);
    console.log(checked);
    setFormData({
      ...formData,
      [name]: value,
    });

    // console.log(formData + " formData");
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
                controlId="size"
                onChange={handleChange}
              >
                <Form.Label>What size was the bird?</Form.Label>

                <Form.Select name="size">
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
              {/* <Form.Group
                className="bodyColor mb-3"
                onChange={handleChange}
                controlId="bodyColor"
              >
                <Form.Label>What color was its body?</Form.Label>
                <Form.Text className="textMuted">
                  (check all that apply)
                </Form.Text>
                <Form.Check
                  type="checkbox"
                  label="black"
                  name="black"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="white"
                  name="bodyColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="brown"
                  name="bodyColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="yellow"
                  name="bodyColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="red"
                  name="bodyColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="blue"
                  name="bodyColor"
                ></Form.Check>
              </Form.Group> */}
              <HeadColorForm />
              {/* <Form.Group
                className="headColor mb-3"
                onChange={handleChange}
                controlId="headColor"
              >
                <Form.Label>What color was its head?</Form.Label>
                <Form.Text className="textMuted">
                  (check all that apply)
                </Form.Text>
                <Form.Check
                  type="checkbox"
                  label="black"
                  name="black"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="white"
                  name="headColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="brown"
                  name="headColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="yellow"
                  name="headColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="red"
                  name="headColor"
                ></Form.Check>
                <Form.Check
                  type="checkbox"
                  label="blue"
                  name="headColor"
                ></Form.Check>
              </Form.Group> */}
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
