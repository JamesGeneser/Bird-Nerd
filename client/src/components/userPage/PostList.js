import React from "react";

const PostList = ({ posts }) => {
  if (!posts.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {post.username} <br />
              <span style={{ fontSize: "1rem" }}>Saw a : {post.bird}</span>
              <div>{post.postText}</div>
            </h4>
            <div className="card-body bg-light p-2">{post.text}</div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
