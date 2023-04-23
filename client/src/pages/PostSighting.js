import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "../styles/PostSighting.css";
import { useMutation } from "@apollo/client";
import { ADD_THOUGHT } from "../utils/mutations";
import { QUERY_THOUGHTS, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import CardChanger from "../components/PostPrompts/Index";

const PostSighting = () => {
  const [thoughtText, setThoughtText] = useState("");
  const [bird, setBird] = useState("");
  const [addThought, { error }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });

        cache.writeQuery({
          query: QUERY_THOUGHTS,
          data: { thoughts: [addThought, ...thoughts] },
        });
      } catch (e) {
        console.error(e);
      }
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, thoughts: [...me.thoughts, addThought] } },
      });
    },
  });

  //   function changeCard() {
  //     const currentCard = postCardRef.current;
  //     console.log(currentCard.current);
  //   }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("handle for submit post");
    try {
      const { data } = await addThought({
        variables: {
          bird,
          thoughtText,
          username: Auth.getProfile().data.username,
        },
      });

      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText") {
      setThoughtText(value);
    }

    if (name === "bird") {
      setBird(value);
      console.log(value);
    }
  };

  return (
    <Container fluid className="postSighting">
      <Row className="justify-content-center">
        <Col>
          <Card className="formCard">
            <Form onSubmit={handleFormSubmit}>
              <h2>Log Book</h2>
              <Form.Group className="mb-3 " controlId="btnGroup">
                {/* <CardChanger /> */}
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
              <Form.Group>
                <Form.Select
                  aria-label="Default Option"
                  onChange={handleChange}
                >
                  <option name="bird" value="Great Blue Heron">
                    Great Blue Heron
                  </option>
                  <option name="bird" value="Bald Eagle">
                    Bald Eagle
                  </option>
                  <option name="bird" value="Osprey">
                    Osprey
                  </option>
                  <option name="bird" value="Common Raven">
                    Common Raven
                  </option>
                  <option name="bird" value="Turkey Vulture">
                    Turkey Vulture
                  </option>
                  <option name="bird" value="Great Horned Owl">
                    Great Horned Owl
                  </option>
                  <option name="bird" value="Mourning Dove">
                    Mourning Dove
                  </option>
                  <option name="bird" value="Belted Kingfisher">
                    Belted Kingfisher
                  </option>
                  <option name="bird" value="Common Grackle">
                    Common Grackle
                  </option>
                  <option name="bird" value="American Avocet">
                    American Avocet
                  </option>
                  <option name="bird" value="Black Billed Magpie">
                    Black Billed Magpie
                  </option>
                  <option name="bird" value="Barn Swallow">
                    Barn Swallow
                  </option>
                  <option name="bird" value="Brownheaded Cowbird">
                    Brownheaded Cowbird
                  </option>
                  <option name="bird" value="Lazuli Bunting">
                    Lazuli Bunting
                  </option>
                  <option name="bird" value="Mountain Bluebird">
                    Mountain Bluebird
                  </option>
                  <option name="bird" value="Tree Swallow">
                    Tree Swallow
                  </option>
                  <option name="bird" value="Yellow Warbler">
                    Yellow Warbler
                  </option>
                  <option name="bird" value="Red-Headed Woodpecker">
                    Red-Headed Woodpecker
                  </option>
                  <option name="bird" value="Black Headed Grosbeck">
                    Black Headed Grosbeak
                  </option>
                  <option name="bird" value="Pygmy Nuthatch">
                    Pygmy Nuthatch
                  </option>
                </Form.Select>
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
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Upload an Image</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  placeholder="Log any notes about the bird sighting here"
                  value={thoughtText}
                  name="thoughtText"
                  as="textarea"
                  rows={5}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PostSighting;
