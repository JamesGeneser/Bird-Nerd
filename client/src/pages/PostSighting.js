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
import { ADD_POST } from "../utils/mutations";
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
  const [thoughtText, setThoughtText] = useState("");
  const [selected, setSelected] = useState(options[0]);
  const [addPost, { error, data }] = useMutation(ADD_POST, {
    // update(cache, { data: { addPost } }) {
    //   try {
    //     const { thoughts } = cache.readQuery({ query: QUERY_THOUGHTS });
    //     console.log(thoughts + "POSTSIGHTING 24");
    //     cache.writeQuery({
    //       query: QUERY_THOUGHTS,
    //       data: { thoughts: [addPost, ...thoughts] },
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, thoughts: [...me.thoughts, addPost] } },
    //   });
    // },
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
      const { mutationResponse } = await addPost({
        variables: {
          bird: selected,
          postText: thoughtText,
          //   postAuthor: Auth.getProfile().data.username,
        },
      });
      //   const token = mutationResponse.data.login.token;

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
          <Card className="formCardSight">
            <Form className="form-box-sight" onSubmit={handleFormSubmit}>
              <h2>Log Book</h2>
              <Form.Group className="mb-3 formGroupSight" controlId="btnGroup">
                <br></br>
                <CardChanger />
              </Form.Group>
              <Form.Group>
                <Form.Select
                  aria-label="Default Option"
                  onChange={handleChange}
                  value={selected}
                  className="birdchoice"
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
              <br></br>

              <Form.Group controlId="formFile" className="mb-3 uploadform">
                <Form.Label className="upload-label">
                  Upload an Image:
                </Form.Label>

                <Form.Control type="file" />
              </Form.Group>
              <br></br>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>
                  Additional Notes about the Encounter:<br></br>
                </Form.Label>
                <Form.Control
                  name="thoughtText"
                  as="textarea"
                  rows={7}
                  className="textarea"
                  value={thoughtText}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="submit-btn btn submit-btn-sight"
                type="submit"
              >
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
