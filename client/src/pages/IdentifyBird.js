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
  // STATE
  const [formData, setFormData] = useState({
    size: "",
    bodyColor: "",
    headColor: "",
  });

  const [logBird, { error, data }] = useMutation(LOG_BIRD);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    try {
      const { data } = logBird({
        variables: { ...formData },
      });
      setFormData("");
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  // Size Change event Listener
  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);
    console.log(`// ${[name]}: changed to --> ${value}`);

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // HEAD Color Change event Listener
  const handleHeadChange = (event) => {
    // Destructuring
    const { name, value, checked } = event.target;
    const { headColor } = formData;

    console.log(formData);
    console.log(`// ${[name]}: added --> ${value}`);

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
  // BODY Color Change event Listener
  const handleBodyChange = (event) => {
    // Destructuring
    const { name, value, checked } = event.target;
    const { bodyColor } = formData;

    console.log(formData);
    console.log(`// ${[name]}: added --> ${value}`);

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
