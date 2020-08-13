import React from 'react'
import { Card } from 'react-bootstrap'

export default function SkillCard (props) {
    const { cardImage, cardTitle, cardText } = props;

    return (
        <div className="col-12 col-md-6 col-lg-4 text-justify">
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={cardImage}/>
                <Card.Body>
                    <Card.Title>{ cardTitle }</Card.Title>
                    <Card.Text>
                        { cardText }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
