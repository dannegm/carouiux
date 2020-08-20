import React from 'react';
import PropTypes from 'prop-types';

import { Centered } from '@/components/layout/helpers';

import {
  ProjectItemWrapper,
  ProjectItemContent,
  ProjectItemCover,
  ProjectItemCard,
  ProjectItemTitle,
  ProjectItemDescription,
  ProjectItemCallToAction,
} from './ProjectItem.styled';

const ProjectItem = ({
  cover,
  title,
  slug,
  description,
  callToActionLabel,
}) => {
  return (
    <ProjectItemWrapper>
      <Centered>
        <ProjectItemContent>
          <ProjectItemCover src={cover} alt={`Image related with ${title}`} />
          <ProjectItemCard>
            <ProjectItemTitle>{title}</ProjectItemTitle>
            <ProjectItemDescription>{description}</ProjectItemDescription>
            <ProjectItemCallToAction href={`/project/${slug}`}>
              {callToActionLabel}
            </ProjectItemCallToAction>
          </ProjectItemCard>
        </ProjectItemContent>
      </Centered>
    </ProjectItemWrapper>
  );
};

ProjectItem.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callToActionLabel: PropTypes.string,
};

ProjectItem.defaultProps = {
  callToActionLabel: 'View more',
};

export default ProjectItem;
