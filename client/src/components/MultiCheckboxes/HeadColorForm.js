import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function HeadColorForm() {
  // const [userinfo, setUserInfo] = useState({
  //   headColor: [],
  //   response: [],
  // });
  const [formData, setFormData] = useState({
    headColor: [],
  });

  const handleChange = (e) => {
    // Destructuring
    const { name, value, checked } = e.target;
    const { headColor } = formData;

    console.log(`// ${[name]}: ${value}`);
    console.log(name);
    console.log(`----> ${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setFormData({
        headColor: [...headColor, value],
      });
      console.log(formData);
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
      console.log(formData);
    }
  };

  return (
    <Form.Group className="headColor mb-3" controlid="headColor">
      <Form.Label>
        What color was its HEAD?<br></br>
      </Form.Label>
      <Form.Text className="textMuted"> (Check all that apply)</Form.Text>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="black"
        name="headColor"
        value="black"
      ></Form.Check>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="white"
        name="headColor"
        value="white"
      ></Form.Check>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="brown"
        name="headColor"
        value="brown"
      ></Form.Check>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="yellow"
        name="headColor"
        value="yellow"
      ></Form.Check>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="red"
        name="headColor"
        value="red"
      ></Form.Check>
      <Form.Check
        onChange={handleChange}
        type="checkbox"
        label="blue"
        name="headColor"
        value="blue"
      ></Form.Check>
    </Form.Group>
  );
}

export default HeadColorForm;
