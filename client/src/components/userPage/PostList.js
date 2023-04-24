import React from "react";
import Card from "react-bootstrap/Card";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Card className="feedCard">
            <div key={post._id} className="card mb-3">
              <div className="card-header bg-primary text-light p-2">
                <h3 className="birdTitle">{post.bird}</h3>
                <div>
                  <div>{post.postText}</div>
                  <div>{post.username}</div>
                </div>
              </div>
            </div>
          </Card>
        ))}
    </div>
  );
};

export default PostList;
