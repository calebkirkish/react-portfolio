import React from "react";
import { Card } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/projectList";

function Portfolio(props) {
  return (
    <Card.Group id="project-cards">
      {projects.map((project, index) => (
        <ProjectCard project={project} key={index} />
      ))}
    </Card.Group>
  );
}

export default Portfolio;
