import React from "react";
import { ReactComponent as HeroImage } from "../assets/hiring.svg";
import { ReactComponent as FindingCandidate } from "../assets/finding.svg";
import Post from "./Post";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-hero-wrapper">
          <div className="hero-image">
            <HeroImage />
          </div>
          <div className="hero-text">
            <h1>Your one way ticket to recruitment</h1>
            <p>
              We are revolutionilizg the hiring industry by minizing the time to
              get hired. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quas numquam non molestias voluptas suscipit iure earum
              minus maiores nihil ex.
            </p>
            <button type="button" className="btn btn-primary btn-big">
              Get Hired !
            </button>
          </div>
        </div>
        <Post />
        <div className="home-hero-wrapper">
          <div className="hero-text">
            <h1>Confused hiring your resources?</h1>
            <p>
              <br />
              We are revolutionilizg the hiring industry by minizing the time to
              get hired. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Eos, amet alias facilis officiis veritatis accusamus qui
              laudantium nostrum doloribus quasi?
            </p>
            <div className="button-wrapper">
              <button className="btn btn-secondary btn-big">Read More !</button>
              <button className="btn btn-primary btn-big">Hire Us !</button>
            </div>
          </div>
          <div className="hero-image">
            <FindingCandidate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
