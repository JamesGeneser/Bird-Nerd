import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../styles/PostSighting.css";

function PostSighting() {
  return (
    <Container fluid className="postSighting">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard">
            <Form>
              <h2>Post about a Sighting</h2>
              <Form.Group className="mb-3" controlId="birdSize">
                <Form.Label>
                  If you know what{" "}
                  <span style={{ fontWeight: "bold" }}>Bird</span> you saw.
                </Form.Label>
                <Form.Select>
                  <option key="blankChoice" hidden>
                    Select a Bird
                  </option>
                  <option value="birdA">Bird A</option>
                  <option value="birdB">Bird B</option>
                  <option value="birdC">Bird C</option>
                  <option value="birdD">Bird D</option>
                  <option value="birdE">Bird E</option>
                  <option value="birdF">Bird F</option>
                </Form.Select>
                <Form.Text>
                  {" "}
                  If you don't know what you saw, navigate to the{" "}
                  <Link to="/identify">ID</Link> page.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload an Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Additional Notes about the Encounter</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default PostSighting;
