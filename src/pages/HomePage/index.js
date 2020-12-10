import React from "react";
import { Container, Image } from "semantic-ui-react";
import "./style.css";

function HomePage() {
  return (
    <Container id="home-page">
      <h1 className="section-title">About Me</h1>
      <Image
        id="about-image"
        src={process.env.PUBLIC_URL + "/img/Caleb.Headshot.Zoom-2.jpg"}
        size="ui medium image"
        centered
      />

      <div className="section-body">
        <p>
          I am a full-stack web developer that wants to create a positive impact
          with the people and organizations that I work with.
        </p>

        <p>
          Former US Navy Veteran who has a passion for everything tech. I
          recently graduated with a BS in Cybersecurity & forensics but felt I
          didn't get enough out of the program and recently just earned a
          certificate from the University of Washington for full-stack wed
          development.
        </p>

        <p>
          I currently work as a winemaker and have enjoyed it most of my life
          but feel like I need a new perspective on life and what makes me
          really want to get out of bed and change the world.
        </p>
      </div>
    </Container>
  );
}

export default HomePage;
