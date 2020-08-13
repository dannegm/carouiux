import React from 'react';
import {
  Container,
  Row,
  Col,
  CardBlock,
  CardTitle,
  CardText,
  CardLink,
} from '@bootstrap-styled/v4';

import imgCentria from '@/assets/images/img_projects_centria.png';
import { ProjectsTitle, CentriaCard } from './Projects.styled';

const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ProjectsTitle>Projects</ProjectsTitle>
          <span>Find here this selected works acrross this field.</span>
        </Col>
      </Row>
      <Row>
        <Col xs={8}>
          <img
            src={imgCentria}
            alt="Centria Healthcare"
            style={{ width: '100%', height: '100%' }}
          />
        </Col>
        <Col xs={4}>
          <CentriaCard>
            <CardBlock>
              <CardTitle>Centria Healthcare</CardTitle>
              <CardText>A scheduling ....</CardText>
              <CardLink href="#">View case study &rarr;</CardLink>
            </CardBlock>
          </CentriaCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
