import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { db } from '@/services/firebase';

import Navbar from '@/components/layout/Navbar';
import Footer from '../Home/components/Footer';
import { Centered } from '@/components/layout/helpers';

import {
  // breakline
  PageWrapper,
  ProjectWrapper,
  Title,
  Table,
  TableRow,
  TableTitle,
  TableContent,
  MediumContent,
  MediumRow,
  MediumColumn,
} from './Project.styled';

const INITIAL_PROJECT = {
  title: '',
  project: '',
  role: '',
  description: '',
  caseStudy: [],
};

const HtmlContent = ({ children }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: children,
      }}
    ></div>
  );
};
HtmlContent.propTypes = {
  children: PropTypes.string.isRequired,
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
            <Title>{projectModel.title}</Title>

            <Table>
              <TableRow>
                <TableTitle>Project:</TableTitle>
                <TableContent>{projectModel.project}</TableContent>
              </TableRow>
              <TableRow>
                <TableTitle>Role:</TableTitle>
                <TableContent>{projectModel.role}</TableContent>
              </TableRow>
              <TableRow>
                <TableTitle>Description:</TableTitle>
                <TableContent>{projectModel.description}</TableContent>
              </TableRow>
            </Table>

            <MediumContent>
              {projectModel.caseStudy.map((row) => (
                <MediumRow key={row.uid} distribution={row.distribution}>
                  <MediumColumn>
                    {row.content[0].type === 'text' ? (
                      <HtmlContent>{row.content[0].content}</HtmlContent>
                    ) : (
                      <img src={row.content[0].content} />
                    )}
                  </MediumColumn>
                </MediumRow>
              ))}
            </MediumContent>
          </ProjectWrapper>
        </Centered>
      )}
      <Footer />
    </PageWrapper>
  );
};

export default Project;
