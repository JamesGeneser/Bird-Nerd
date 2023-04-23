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
    bodyColor: [],
    headColor: [],
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

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    console.log(`// ${[name]}: ${value}`);

    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
  const handleHeadChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
    const { headColor } = formData;

    console.log(`// ${[name]}: ${value}`);
    console.log(name);
    console.log(`----> ${value} is ${checked}`);
    console.log(formData);

    // Case 1 : The user checks the box
    if (checked) {
      setFormData({
        ...formData,
        headColor: [...headColor, value],
      });
      // setUserInfo({
      //   headColor: [...headColor, value],
      //   response: [...headColor, value],
      // });
    }
    // Case 2  : The user unchecks the box
    else {
      setFormData({
        headColor: headColor.filter((e) => e !== value),
      });
      console.log(headColor);
    }
  };
  const handleBodyChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
    const { bodyColor } = formData;

    console.log(`// ${[name]}: ${value}`);
    console.log(name);
    console.log(`----> ${value} is ${checked}`);
    console.log(formData);

    // Case 1 : The user checks the box
    if (checked) {
      setFormData({
        ...formData,
        bodyColor: [...bodyColor, value],
      });
      // setUserInfo({
      //   bodyColor: [...bodyColor, value],
      //   response: [...bodyColor, value],
      // });
    }
    // Case 2  : The user unchecks the box
    else {
      setFormData({
        bodyColor: bodyColor.filter((e) => e !== value),
      });
      console.log(bodyColor);
    }
  };

  return (
    <Container fluid className="identifyBird">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCardID">
            <Form onSubmit={handleFormSubmit} className="form-box-id">
              <h2>Identify a bird</h2>
              {/* BIRD SIZE DROPDOWN */}
              <Form.Group
                className="mb-3 formGroupID"
                controlId="size"
                onChange={handleSizeChange}
              >
                <Form.Label>What size was the bird?</Form.Label>
                <br></br>
                <Form.Select name="size" className="select-box select-box-id">
                  <option key="blankChoice" hidden>
                    {" "}
                    Bird size
                  </option>
                  <option>Small</option>
                  <option>Medium</option>
                  <option>Large</option>
                </Form.Select>
              </Form.Group>
              <br></br>
              {/* HEAD COLOR FORM */}
              <Form.Group className="headColor mb-3" controlid="headColor">
                <Form.Label>
                  What color was its HEAD?<br></br>
                </Form.Label>
                <Form.Text className="textMuted">
                  {" "}
                  (Check all that apply)
                </Form.Text>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="black"
                  name="headColor"
                  value="black"
                ></Form.Check>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="white"
                  name="headColor"
                  value="white"
                ></Form.Check>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="brown"
                  name="headColor"
                  value="brown"
                ></Form.Check>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="yellow"
                  name="headColor"
                  value="yellow"
                ></Form.Check>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="red"
                  name="headColor"
                  value="red"
                ></Form.Check>
                <Form.Check
                  onChange={handleHeadChange}
                  type="checkbox"
                  label="blue"
                  name="headColor"
                  value="blue"
                ></Form.Check>
              </Form.Group>
              <br></br>
              {/* BODY COLOR FORM */}
              <Form.Group className="bodyColor mb-3" controlId="bodyColor">
                <Form.Label>
                  What color was its BODY?<br></br>
                </Form.Label>
                <Form.Text className="textMuted">
                  {" "}
                  (Check all that apply)
                </Form.Text>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="black"
                  name="bodyColor"
                  value="black"
                ></Form.Check>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="white"
                  name="bodyColor"
                  value="white"
                ></Form.Check>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="brown"
                  name="bodyColor"
                  value="brown"
                ></Form.Check>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="yellow"
                  name="bodyColor"
                  value="yellow"
                ></Form.Check>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="red"
                  name="bodyColor"
                  value="red"
                ></Form.Check>
                <Form.Check
                  onChange={handleBodyChange}
                  type="checkbox"
                  label="blue"
                  name="bodyColor"
                  value="blue"
                ></Form.Check>
              </Form.Group>{" "}
              <br></br>
              {/* SUBMIT BUTTON */}
              <Button
                variant="primary"
                className="btn submit-btn submit-btn-id"
                type="submit"
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
