import React, { useState, useEffect } from 'react';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db, dbCollections } from '@services/firebase';

import { Centered } from '@components/layout/helpers';

import ProjectItem from './components/ProjectItem';

import { ProjectsWrapper, ProjectsTitle, ProjectsDescription } from './Projects.styled';

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
        <ProjectsWrapper>
            <Centered>
                <ProjectsTitle>Projects</ProjectsTitle>
                <ProjectsDescription>
                    Find here this selected works acrross this field.
                </ProjectsDescription>

                {projectsData.map((project) => (
                    <>
                        <ProjectItem
                            key={project.uid}
                            cover={project.cover}
                            title={project.title}
                            slug={project.slug}
                            description={project.previewText}
                            callToActionLabel={project.callToActionLabel}
                        />
                    </>
                ))}
            </Centered>
        </ProjectsWrapper>
    );
};

export default Projects;
