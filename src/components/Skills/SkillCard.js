import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardBlock,
  CardImg,
  CardTitle,
  CardText,
} from '@bootstrap-styled/v4';

const SkillCard = (props) => {
  const { image, title, text } = props;

  return (
    <Col xs={12} md={6} lg={4} className="text-justify">
      <Card>
        <CardImg top src={image} style={{ maxWidth: '100%' }} />
        <CardBlock>
          <CardTitle>{title}</CardTitle>
          <CardText>{text}</CardText>
        </CardBlock>
      </Card>
    </Col>
  );
};

SkillCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
