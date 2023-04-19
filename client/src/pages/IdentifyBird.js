import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";
import { LOG_BIRD } from "../utils/mutations";

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
    <>
      <Card className="formCard mb-5">
        <Form onSubmit={handleFormSubmit}>
          <h2>Identify a bird</h2>
          <Form.Group className="birdSize" onChange={handleChange}>
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
          <Form.Group className="bodyColor" onChange={handleChange}>
            <Form.Label>What color was its body?</Form.Label>
            <Form.Text className="textMuted">(check all that apply)</Form.Text>
            <Form.Check
              type="checkbox"
              label="black"
              name="bodyColor"
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
          </Form.Group>
          <Form.Group className="headColor" onChange={handleChange}>
            <Form.Label>What color was its head?</Form.Label>
            <Form.Text className="textMuted">(check all that apply)</Form.Text>
            <Form.Check
              type="checkbox"
              label="black"
              name="headColor"
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
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default IdentifyBird;
