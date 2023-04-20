import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const cardStyle = {
  marginRight: "10px",
};

function MyCard() {
  return (
    <Card>
      <Card.Header as="h5">Title</Card.Header>
      <Card.Body>
        <Card.Title>Description</Card.Title>
        <Card.Text>Things happened and I saw a really cool Bird</Card.Text>
        <Button variant="warning" style={cardStyle}>
          Edit
        </Button>
        <Button variant="danger">Delete</Button>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
