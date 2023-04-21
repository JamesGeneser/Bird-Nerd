import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import MyCard from "../components/userPage/MyCard";
import "../styles/User.css";
import EditCardForm from "../components/userPage/EditCardForm";

const User = () => {
  return (
    <Container fluid className="userPage">
      <Row>
        <Col className="leftSide">
          <h1>{`[Username]'s Feed`}</h1>
          <Stack gap={3}>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
          </Stack>
        </Col>
        <Col className="rightSide">
          <h1>Edit Post</h1>
          <EditCardForm />
        </Col>
      </Row>
    </Container>
  );
};

export default User;