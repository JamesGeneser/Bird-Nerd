import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import MyCard from "../components/userPage/PostCard";
import "../styles/User.css";
import EditCardForm from "../components/userPage/EditCardForm";
import PostList from "../components/userPage/PostList";
import { QUERY_POSTS } from "../utils/queries";

const User = () => {
  // if (!posts.length) {
  //   return <h3>No Thoughts Yet</h3>;
  // }

  // const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts;

  console.log([posts] + "User 23");
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Container fluid className="userPage">
        <Row>
          <Col className="leftSide">
            <h1>My Feed</h1>

            <Stack gap={3}>
              <div className="my-3">
                <div className="bg-light py-4">
                  {/* <h2>{posts}</h2> */}
                  <PostList posts={posts} />

                  {/* {posts.postText} */}
                </div>
              </div>
              {/* {posts &&
                posts.map((post) => {
                  <div key={post._id} className="card mb-3">
                    <h4 className="card-header bg-primary text-light p-2 m-0">
                      <span style={{ fontSize: "1rem" }}>
                        posted on {post.createdAt}
                      </span>
                    </h4>
                    <div className="card-body bg-light p-2">
                      <p>{post.bird}</p>
                      <p>{post.postText}</p>
                    </div>
                  </div>;
                })} */}
              {/* <MyCard />
              <MyCard />
              <MyCard />
              <MyCard /> */}
            </Stack>
          </Col>
          <Col className="rightSide">
            <h1>Edit Post</h1>
            <EditCardForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default User;
