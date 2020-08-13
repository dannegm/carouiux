import styled from 'styled-components';

export const ProjectItemWrapper = styled.article`
  margin-top: 5rem;
  margin-bottom: 5rem;
`;

export const ProjectItemContent = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 50rem;
`;

export const ProjectItemCover = styled.img`
  display: block;
  position: relative;
  width: 60%;
  z-index: 1;
`;

export const ProjectItemCard = styled.div`
  position: relative;
  z-index: 10;
  margin-top: -7.5rem;
  margin-left: 45%;
  width: 50%;
  background: #fff;
  overflow: hidden;
  padding: 2rem;
  box-shadow: 0 6px 20px 6px rgba(0 0 0 / 8%);
  margin-bottom: 20px;
`;

export const ProjectItemTitle = styled.h3`
  font-size: 2.813rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 1rem;
`;

export const ProjectItemDescription = styled.p`
  font-size: 1.875rem;
  margin-top: 1rem;
`;

export const ProjectItemCallToAction = styled.a`
  font-size: 1.563rem;
  color: #3437ad;
`;
