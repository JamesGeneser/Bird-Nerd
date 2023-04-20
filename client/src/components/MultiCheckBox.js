import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const MultiCheckBox = () => {
  const [userinfo, setUserInfo] = useState({
    bodyColors: [],
    response: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { bodyColors } = userinfo;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        bodyColors: [...bodyColors, value],
        response: [...bodyColors, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        bodyColors: bodyColors.filter((e) => e !== value),
        response: bodyColors.filter((e) => e !== value),
      });
    }
  };
  return (
    <>
      <Form.Group
        className="bodyColor mb-3"
        onChange={handleChange}
        controlId="bodyColor"
      >
        <Form.Label>What color was its body?</Form.Label>
        <Form.Text className="textMuted">(check all that apply)</Form.Text>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="black"
          name="bodyColor"
        ></Form.Check>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="white"
          name="bodyColor"
        ></Form.Check>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="brown"
          name="bodyColor"
        ></Form.Check>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="yellow"
          name="bodyColor"
        ></Form.Check>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="red"
          name="bodyColor"
        ></Form.Check>
        <Form.Check
          checked={this.state.checkbocChecked}
          onChange={this.handleChange}
          type="checkbox"
          label="blue"
          name="bodyColor"
        ></Form.Check>
      </Form.Group>
    </>
  );
};

export default MultiCheckBox;
