import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const buttonStyle = {
  marginRight: "10px",
};

function EditCardForm() {
  return (
    <Card className="formCardUser">
      <Form>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label className="editPost">Title: </Form.Label>
          <br></br>
          <Form.Control
            name="text"
            type="text"
            className="formLabelUser"
            // placeholder="Title Placeholder"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label className="editPost">Description: </Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            className="textarea"
            // placeholder="Text Area Placeholder"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Button
          variant="success"
          className="submit-btn-user"
          style={buttonStyle}
        >
          Update
        </Button>
        <Button variant="danger" className="del" style={buttonStyle}>
          Delete
        </Button>
      </Form>
    </Card>
  );
}

export default EditCardForm;
