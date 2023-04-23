import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const cardStyle = {
  marginRight: "10px",
};

function PostCard() {
  return (
    <Card className="postCard">
      <Card.Header as="h3">Title: </Card.Header>
      <Card.Body>
        <Card.Title>Description: </Card.Title>
        <Card.Text>Things happened and I saw a really cool Bird</Card.Text>
        <br></br>
        <Button variant="warning" className="submit-btn-user" style={cardStyle}>
          Edit
        </Button>
        <Button variant="danger" className="del">
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PostCard;
