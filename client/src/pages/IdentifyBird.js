import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";
import { LOG_BIRD } from "../utils/mutations";
import "../styles/IdentifyBird.css";
import { Link } from "react-router-dom";

const birdsArray = [
  //1
  {
    name: "Great Blue Heron",
    size: "Large",
    bodyColor: "Blue",
    headColor: "Blue",
  },
  //2
  {
    name: "Bald Eagle",
    size: "Large",
    bodyColor: "Brown",
    headColor: "White",
  },
  //3
  {
    name: "Osprey",
    size: "Large",
    bodyColor: "BrownWhite",
    headColor: "White",
  },
  //4
  {
    name: "Common Raven",
    size: "Large",
    bodyColor: "Black",
    headColor: "Black",
  },
  //5
  {
    name: "Turkey Vulture",
    size: "Large",
    bodyColor: "Brown",
    headColor: "Red",
  },
  //6
  {
    name: "Great Horned Owl",
    size: "Large",
    bodyColor: "Brown",
    headColor: "Brown",
  },
  //7
  {
    name: "Mourning Dove",
    size: "Medium",
    bodyColor: "White",
    headColor: "Brown",
  },
  //8
  {
    name: "Belted Kingfisher",
    size: "Medium",
    bodyColor: "BlueWhite",
    headColor: "Blue",
  },
  //9
  {
    name: "Common Grackle",
    size: "Medium",
    bodyColor: "Black",
    headColor: "Black",
  },
  //10
  {
    name: "American Avocet",
    size: "Large",
    bodyColor: "BlackWhite",
    headColor: "Brown",
  },
  //11
  {
    name: "Black Billed Magpie",
    size: "Medium",
    bodyColor: "BlackWhite",
    headColor: "Black",
  },
  //12
  {
    name: "Barn Swallow",
    size: "Small",
    bodyColor: "Brown",
    headColor: "Blue",
  },
  //13
  {
    name: "Brownheaded Cowbird",
    size: "Small",
    bodyColor: "Black",
    headColor: "Brown",
  },
  //14
  {
    name: "Lazuli Bunting",
    size: "Small",
    bodyColor: "Blue",
    headColor: "White",
  },
  //15
  {
    name: "Mountain Bluebird",
    size: "Small",
    bodyColor: "Blue",
    headColor: "Blue",
  },
  //16
  {
    name: "Tree Swallow",
    size: "Small",
    bodyColor: "BlueWhite",
    headColor: "Blue",
  },
  //17
  {
    name: "Yellow Warbler",
    size: "Small",
    bodyColor: "Yellow",
    headColor: "Yellow",
  },
  //18
  {
    name: "Red-Headed Woodpecker",
    size: "Small",
    bodyColor: "BlackWhite",
    headColor: "Red",
  },
  //19
  {
    name: "Black Headed Grosbeak",
    size: "Small",
    bodyColor: "Orange",
    headColor: "Black",
  },
  //20
  {
    name: "Pygmey Nuthatch",
    size: "Small",
    bodyColor: "BlueWhite",
    headColor: "Brown",
  },
];

const IdentifyBird = () => {
  // STATE
  const [matchedBird, setMatchedBird] = useState({
    name: "Bird Name",
    size: "Bird Size",
    headColor: "Head Color",
    bodyColor: "Body Color",
  });
  console.log("Before Submit:");
  console.log(matchedBird);

  const [formData, setFormData] = useState({
    size: "",
    bodyColor: "",
    headColor: "",
  });
  // TODO: useMutation!!!!!!!!!!!!
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

    const birdMatch = (array, object) => {
      array.forEach((member) => {
        if (
          member.size === object.size &&
          member.headColor === object.headColor &&
          member.bodyColor === object.bodyColor
        ) {
          console.log("MATCH FOUND!");
          console.log("Matching Bird: " + member.name);
          setMatchedBird({
            ...matchedBird,
            name: member.name,
            size: member.size,
            headColor: member.headColor,
            bodyColor: member.bodyColor,
          });
          console.log(matchedBird);
        } else {
          console.log(`This Bird's Details don't Match any Bird in our Database.
          Please Try Again`);
          // window.location.reload();
        }
      });
    };

    birdMatch(birdsArray, birdObject);
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
    }
    // Case 2  : The user unchecks the box
    else {
      setFormData({
        headColor: headColor.filter((event) => event !== value),
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
    }
    // Case 2  : The user unchecks the box
    else {
      setFormData({
        bodyColor: bodyColor.filter((event) => event !== value),
      });
      console.log(bodyColor);
    }
  };

  return (
    <Container fluid className="identifyBird">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCardID">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/200x200?text=Bird+IMG"
            />
            <Card.Body>
              <Card.Title>
                <h2>{matchedBird.name}</h2>
              </Card.Title>
              <Card.Text>{`Size: ${matchedBird.size}`}</Card.Text>
              <Card.Text>{`Head Color: ${matchedBird.headColor}`}</Card.Text>
              <Card.Text>{`Body Color: ${matchedBird.bodyColor}`}</Card.Text>
            </Card.Body>{" "}
          </Card>
        </Col>
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
