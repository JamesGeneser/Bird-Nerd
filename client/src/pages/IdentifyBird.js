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

  // FORM SUBMIT event Listener
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("***** Submit Click *****");
    console.log("Capturing Info from State: ");
    console.log({ ...formData });

    // Combine all answers into 1 string for each key
    let headColorString = formData.headColor.join("");
    let bodyColorString = formData.bodyColor.join("");

    // Assign combined strings
    console.log("Combining Answers: ");
    let birdObject = {
      size: formData.size,
      headColor: headColorString,
      bodyColor: bodyColorString,
    };

    console.log("Size: " + birdObject.size);
    console.log("Head Color: " + birdObject.headColor);
    console.log("Body Color: " + birdObject.bodyColor);

    // ---- ACTUAL LOGIC ON SUBMIT ----
    try {
      const { data } = logBird({
        variables: { ...formData },
      });
      setFormData("");
      console.log("TRY: Success");
      // window.location.reload();
    } catch (error) {
      console.log("CATCH: Error");
      console.error(error);
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
                <div className="headCheck">
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="Black"
                    name="headColor"
                    value="Black"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="White"
                    name="headColor"
                    value="White"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="Brown"
                    name="headColor"
                    value="Brown"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="Yellow"
                    name="headColor"
                    value="Yellow"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="Red"
                    name="headColor"
                    value="Red"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleHeadChange}
                    type="checkbox"
                    label="Blue"
                    name="headColor"
                    value="Blue"
                  ></Form.Check>
                </div>
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
                <div className="bodyCheck">
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="Black"
                    name="bodyColor"
                    value="Black"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="White"
                    name="bodyColor"
                    value="White"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="Brown"
                    name="bodyColor"
                    value="Brown"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="Yellow"
                    name="bodyColor"
                    value="Yellow"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="Red"
                    name="bodyColor"
                    value="Red"
                  ></Form.Check>
                  <Form.Check
                    onChange={handleBodyChange}
                    type="checkbox"
                    label="Blue"
                    name="bodyColor"
                    value="Blue"
                  ></Form.Check>
                </div>
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
