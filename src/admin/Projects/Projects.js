import React, { useState, useEffect } from 'react';

import { db } from '@/services/firebase';

import {
  Grid,
  Card,
  Link,
  CardHeader as MuiCardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import {
  Wrapper,
  CardHeader,
  CardHeaderButton,
  Breadcrumbs,
} from './Projects.styled';

import { Delete } from '@material-ui/icons';

const Projects = () => {
  const [projectsData, setProjectsData] = useState([]);

  const fetchProjects = async () => {
    const projectsSnapshot = await db
      .collection('projects')
      .where('showInHome', '==', true)
      .get();
    const data = projectsSnapshot.docs.map((doc) => doc.data());
    setProjectsData(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <Wrapper>
      <Card>
        <CardHeader
          title={
            <Breadcrumbs>
              <Link href="/secret">🏠</Link>
              <Link href="/secret/projects">Projects</Link>
            </Breadcrumbs>
          }
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

      <Grid container spacing={2} style={{ marginTop: '2rem' }}>
        {projectsData.map((project) => (
          <Grid key={project.uid} item xs={6} sm={3}>
            <Card>
              <MuiCardHeader title={project.title} />
              <CardMedia style={{ height: '160px' }} image={project.cover} />
              <CardActions>
                <Button color="primary">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
export default Projects;
