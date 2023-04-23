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
const options = [
  "Great Blue Heron",
  "Bald Eagle",
  "Osprey",
  "Common Raven",
  "Turkey Vulture",
  "Great Horned Owl",
  "Mourning Dove",
  "Belted Kingfisher",
  "Common Grackle",
  "American Avocet",
  "Black Billed Magpie",
  "Barn Swallow",
  "Brownheaded Cowbird",
  "Lazuli Bunting",
  "Mountain Bluebird",
  "Tree Swallow",
  "Yellow Warbler",
  "Red-Headed Woodpecker",
  "Black Headed Grosbeak",
  "Pygmey Nuthatch",
];
const PostSighting = () => {
  //   const [formState, setFormState] = useState({
  //     bird: "",
  //     thoughtText: "",
  //   });
  const [thoughtText, setThoughtText] = useState("");
  const [selected, setSelected] = useState(options[0]);
  const [addThought, { error, data }] = useMutation(ADD_THOUGHT, {
    update(cache, { data: { addThought } }) {
      try {
        const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
        console.log(thoughts + "POSTSIGHTING 24");

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
    console.log("handle form submit post");
    console.log(selected);
    console.log(thoughtText);
    try {
      const mutationResponse = await addThought({
        variables: {
          bird: selected,
          thoughtText: thoughtText,
        },
        // variables: {
        //   bird: formState.bird,
        //   thoughtText: formState.thoughtText,
        //   username: Auth.getProfile().data.username,
        // },
      });
      console.log(data + "data post 57");

      setThoughtText("");
    } catch (err) {
      console.error(err + "err on 61");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "birdSelect") {
      console.log(selected);
      setSelected(value);
    }

    if (name === "thoughtText") {
      console.log(thoughtText);
      setThoughtText(value);
    }
  };
  return (
    <Container fluid className="postSighting">
      <Row className="justify-content-center">
        <Col>
<<<<<<< HEAD
          <Card className="formCard">
            <Form onSubmit={handleFormSubmit}>
              <h2>Log Book</h2>
              <Form.Group className="mb-3 " controlId="btnGroup">
                {/* <CardChanger /> */}
=======
          <Card className="formCardSight">
            <Form className="form-box-sight">
              <h2>Log Book</h2>
              <Form.Group className="mb-3 formGroupSight" controlId="btnGroup">
                <br></br>
                <CardChanger />
>>>>>>> main
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
                  value={selected}
                  name="birdSelect"
                >
                  <option name="bird">Great Blue Heron</option>
                  <option name="bird">Bald Eagle</option>
                  <option name="bird">Osprey</option>
                  <option name="bird">Common Raven</option>
                  <option name="bird">Turkey Vulture</option>
                  <option name="bird">Great Horned Owl</option>
                  <option name="bird">Mourning Dove</option>
                  <option name="bird">Belted Kingfisher</option>
                  <option name="bird">Common Grackle</option>
                  <option name="bird">American Avocet</option>
                  <option name="bird">Black Billed Magpie</option>
                  <option name="bird">Barn Swallow</option>
                  <option name="bird">Brownheaded Cowbird</option>
                  <option name="bird">Lazuli Bunting</option>
                  <option name="bird">Mountain Bluebird</option>
                  <option name="bird">Tree Swallow</option>
                  <option name="bird">Yellow Warbler</option>
                  <option name="bird">Red-Headed Woodpecker</option>
                  <option name="bird">Black Headed Grosbeak</option>
                  <option name="bird">Pygmy Nuthatch</option>
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
              <Form.Group controlId="formFile" className="mb-3 uploadform">
                <Form.Label className="upload-label">Upload an Image:</Form.Label>

                <Form.Control type="file" />
              </Form.Group>
              <br></br>
              <Form.Group className="mb-3" controlId="description">
<<<<<<< HEAD
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
=======
                <Form.Label>
                  Additional Notes about the Encounter:<br></br>
                </Form.Label>
                <Form.Control as="textarea" rows={7} className="textarea" />
              </Form.Group>
              <Button
                variant="primary"
                className="submit-btn btn submit-btn-sight"
              >
>>>>>>> main
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
