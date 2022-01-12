import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';

import { collection, getDocs, query, where } from 'firebase/firestore';

import { db, dbCollections } from '@services/firebase';

import Navbar from '@components/layout/Navbar';
import { Centered } from '@components/layout/helpers';

import Footer from '../Home/components/Footer';

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
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
                __html: children,
            }}
        />
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
        const projectsCollection = collection(db, dbCollections.PROJECTS);
        const queryResult = query(projectsCollection, where('slug', '==', slug));
        const projectsSnapshot = await getDocs(queryResult);

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
                                            <img src={row.content[0].content} alt='' />
                                        )}
                                    </MediumColumn>
                                    {row.distribution !== '1x' && (
                                        <MediumColumn>
                                            {row.content[1].type === 'text' ? (
                                                <HtmlContent>{row.content[1].content}</HtmlContent>
                                            ) : (
                                                <img src={row.content[1].content} alt='' />
                                            )}
                                        </MediumColumn>
                                    )}
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
