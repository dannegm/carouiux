import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { db } from '@/services/firebase';

import Navbar from '@/components/layout/Navbar';
import Footer from '../Home/components/Footer';
import { Centered } from '@/components/layout/helpers';

import {
  // breakline
  PageWrapper,
  ProjectWrapper,
} from './Project.styled';

const INITIAL_PROJECT = {
  title: '',
  project: '',
  role: '',
  description: '',
  caseStudy: [],
};

const Project = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [projectModel, setProjectModel] = useState(INITIAL_PROJECT);
  const [isLoading, setLoading] = useState(true);

  const fetchProject = async () => {
    const projectsSnapshot = await db
      .collection('projects')
      .where('slug', '==', slug)
      .get();

    if (!projectsSnapshot.docs.length) {
      history.push('/');
    }

    const [project] = projectsSnapshot.docs;

    setProjectModel(project.data());
    setLoading(false);
  };

  useEffect(() => {
    fetchProject(slug);
  }, [slug]);

  return (
    <PageWrapper>
      <Navbar />
      {!isLoading && (
        <Centered>
          <ProjectWrapper>
            <h1>{projectModel.title}</h1>
          </ProjectWrapper>
        </Centered>
      )}
      <Footer />
    </PageWrapper>
  );
};

export default Project;
