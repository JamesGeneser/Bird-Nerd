import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/PostSighting.css";
import CardChanger from "../components/PostPrompts/Index";

const PostSighting = () => {
  const postCardRef = useRef(null);

  function changeCard() {
    const currentCard = postCardRef.current;
    console.log(currentCard.current);
  }

  return (
    <Container fluid className="postSighting">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard">
            <Form className="form-box-sight">
              <h2>Log Book</h2>
              <Form.Group className="mb-3 formGroup" controlId="btnGroup">
                <CardChanger />
                {/* <Button onClick={changeCard} name="selectBird">
                  Select from <span style={{ fontWeight: "bold" }}>Birds</span>
                </Button>

                <Button>
                  Use the <span style={{ fontWeight: "bold" }}>ID</span> tool
                </Button>
                <Form.Label>
                  If you know what{" "}
                  <span style={{ fontWeight: "bold" }}>Bird</span> you saw.
                </Form.Label> */}
              </Form.Group>
              {/* <Form.Group>
                <Form.Select aria-label="Default Option">
                  <option>select from large birds</option>
                  <option value="Great Blue Heron">Great Blue Heron</option>
                  <option value="Bald Eagle">Bald Eagle</option>
                  <option value="Osprey">Osprey</option>
                  <option value="Common Raven">Common Raven</option>
                  <option value="Turkey Vulture">Turkey Vulture</option>
                  <option value="Great Horned Owl">Great Horned Owl</option>
                </Form.Select>
                <Form.Select aria-label="Default Option">
                  <option>select from medium birds</option>
                  <option value="Mourning Dove">Mourning Dove</option>
                  <option value="Belted Kingfisher">Belted Kingfisher</option>
                  <option value="Common Grackle">Common Grackle</option>
                  <option value="American Avocet">American Avocet</option>
                  <option value="Black Billed Magpie">
                    Black Billed Magpie
                  </option>
                </Form.Select>
                <Form.Select aria-label="Default Option">
                  <option>select from small birds</option>
                  <option value="Barn Swallow">Barn Swallow</option>
                  <option value="Brownheaded Cowbird">
                    Brownheaded Cowbird
                  </option>
                  <option value="Lazuli Bunting">Lazuli Bunting</option>
                  <option value="Mountain Bluebird">Mountain Bluebird</option>
                  <option value="Tree Swallow">Tree Swallow</option>
                  <option value="Yellow Warbler">Yellow Warbler</option>
                  <option value="Red-Headed Woodpecker">
                    Red-Headed Woodpecker
                  </option>
                  <option value="Black Headed Grosbeck">
                    Black Headed Grosbeak
                  </option>
                  <option value="Pygmy Nuthatch">Pygmy Nuthatch</option>
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
                  <option value="birdF">Bird F</option
                </Form.Select>
                <Form.Text>
                  {" "}
                  If you don't know what you saw, navigate to the{" "}
                  <Link to="/identify">ID</Link> page.
                </Form.Text>
              </Form.Group> */}
              <Form.Group controlId="formFile" className="mb-3 uploadform">
                <Form.Label>Upload an Image: </Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <br></br>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>
                  Additional Notes about the Encounter:<br></br>{" "}
                </Form.Label>
                <Form.Control as="textarea" rows={7} className="textarea" />
              </Form.Group>
              <Button variant="primary">Submit</Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostSighting;
