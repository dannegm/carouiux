import React, { useState, useEffect } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';

import {
    Grid,
    Card,
    Link,
    CardHeader as MuiCardHeader,
    CardMedia,
    CardActions,
    Button,
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

import { db, dbCollections } from '@services/firebase';

import { Wrapper, CardHeader, CardHeaderButton, Breadcrumbs } from './Projects.styled';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);

    const fetchProjects = async () => {
        const projectsCollection = collection(db, dbCollections.PROJECTS);
        const queryResult = query(projectsCollection, where('showInHome', '==', true));
        const projectsSnapshot = await getDocs(queryResult);
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
                            <Link href='/secret'>🏠</Link>
                            <Link href='/secret/projects'>Projects</Link>
                        </Breadcrumbs>
                    }
                    action={
                        <CardHeaderButton
                            variant='contained'
                            color='primary'
                            endIcon={<Add />}
                            href='/secret/projects/create'
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
                                <Button
                                    color='primary'
                                    href={`/secret/projects/edit/${project.uid}`}
                                >
                                    Edit
                                </Button>
                                <Button
                                    color='primary'
                                    target='_blank'
                                    href={`/project/${project.slug}`}
                                >
                                    Open Page
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};
export default Projects;
