import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="landing-wrapper">
      <div className="img-wrapper">
        <div className="landing-picture">
          <img
            src={
              "https://www.allaboutbirds.org/guide/assets/photo/303711061-1280px.jpg"
            }
            alt="birb in a snazzy suit"
            className="landing-img"
          />
        </div>
      </div>

      <div className="landing-content">
        <div className="landing-text">
          <h5>Welcome to</h5>
          <h1>Bird Nerd</h1>
          <h5>Login or sign up below</h5>
        </div>
        <div className="landing-buttons">
          <Link to="/login" className="link">
            <button className="login-btn btn" type="submit">
              LOGIN
            </button>
          </Link>
        </div>
        <div>
          <Link to="/signup" className="link">
            <button className="signup-btn btn" type="submit" href="/signup">
              SIGN UP
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
