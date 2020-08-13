import React from 'react';

import { Centered } from '@/components/layout/helpers';

import ProjectItem from './components/ProjectItem';

import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsDescription,
} from './Projects.styled';

import projectsData from '@/assets/mocks/projects.json';

const Projects = () => {
  return (
    <ProjectsWrapper>
      <Centered>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsDescription>
          Find here this selected works acrross this field.
        </ProjectsDescription>

        {projectsData.map((project) => (
          <ProjectItem
            cover={project.cover}
            title={project.title}
            description={project.description}
            callToActionLabel={project.callToActionLabel}
          />
        ))}
      </Centered>
    </ProjectsWrapper>
  );
};

export default Projects;
