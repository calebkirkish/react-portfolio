import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function ProjectCard({ project }) {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src={process.env.PUBLIC_URL + project.preview}
        />
        <Card.Header>{project.name}</Card.Header>
        <Card.Meta>{project.stack}</Card.Meta>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            <a href={project.repositoryLink}>Repo</a>
          </Button>
          <Button basic color="red">
            <a href={project.deployLink}>Demo</a>
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default ProjectCard;
