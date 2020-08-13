import React from 'react';
import { Card } from 'react-bootstrap'

import imgCentria from '@/assets/images/img_projects_centria.png';
import { ProjectsTitle, CentriaCard } from './Projects.styled';

export default function Projects() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <ProjectsTitle>Projects</ProjectsTitle>
                        <span>Find here this selected works acrross this field.</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <img src={imgCentria} alt="Centria Healthcare" style={{ width:"100%", height:"100%" }} />
                    </div>
                    <div className="col-4">
                    <CentriaCard>
                        <Card.Body>
                            <Card.Title>Centria Healthcare</Card.Title>
                            <Card.Text>
                                A scheduling ....
                            </Card.Text>
                            <Card.Link href="#">
                                View case study &rarr;
                            </Card.Link>
                        </Card.Body>
                    </CentriaCard>
                    </div>
                </div>
            </div>
        </>
    );
}
