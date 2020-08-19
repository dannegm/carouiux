import React from 'react';

import { Card } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { Wrapper, CardHeader, CardHeaderButton } from './Projects.styled';
import { useRouteMatch } from 'react-router-dom';

const Projects = () => {
  let { url } = useRouteMatch();

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title="Projects"
          action={
            <CardHeaderButton
              variant="contained"
              color="primary"
              endIcon={<Add />}
              href="/secret/projects/create"
            >
              Create Project
            </CardHeaderButton>
          }
        />
      </Card>
    </Wrapper>
  );
};
export default Projects;
