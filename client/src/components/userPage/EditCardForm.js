import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const buttonStyle = {
  marginRight: "10px",
};

function EditCardForm() {
  return (
    <Card className="formCard">
      <Form>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label as="h4">Title</Form.Label>
          <Form.Control
            name="text"
            type="text"
            placeholder="Title Placeholder"
          />
          <Form.Text className="text-muted">Muted Text</Form.Text>
        </Form.Group>
        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label as="h4">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Text Area Placeholder"
          />
          <Form.Text className="text-muted">Muted Text</Form.Text>
        </Form.Group>
        <Button variant="success" style={buttonStyle}>
          Update
        </Button>
        <Button variant="danger" style={buttonStyle}>
          Delete
        </Button>
      </Form>
    </Card>
  );
}

export default EditCardForm;
