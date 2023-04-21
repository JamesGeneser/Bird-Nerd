import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function BodyColorForm() {
  const [userInput, setUserInput] = useState({
    bodyColor: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { bodyColor } = userInput;
    const name = e.target.name;

    console.log(`${value} is ${checked}`);
    console.log(name);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInput({
        bodyColor: [...bodyColor, value],
        response: [...bodyColor, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInput({
        bodyColor: bodyColor.filter((e) => e !== value),
        response: bodyColor.filter((e) => e !== value),
      });
    }
  };

  return (
    <>
      <Form.Group className="bodyColor mb-3" controlId="bodyColor">
        <Form.Label>What color was its body?</Form.Label>
        <Form.Text className="textMuted">(check all that apply)</Form.Text>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="black"
          name="bodyColor"
          value="black"
        ></Form.Check>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="white"
          name="bodyColor"
          value="white"
        ></Form.Check>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="brown"
          name="bodyColor"
          value="brown"
        ></Form.Check>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="yellow"
          name="bodyColor"
          value="yellow"
        ></Form.Check>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="red"
          name="bodyColor"
          value="red"
        ></Form.Check>
        <Form.Check
          onChange={handleChange}
          type="checkbox"
          label="blue"
          name="bodyColor"
          value="blue"
        ></Form.Check>
      </Form.Group>
    </>
  );
}

export default BodyColorForm;
