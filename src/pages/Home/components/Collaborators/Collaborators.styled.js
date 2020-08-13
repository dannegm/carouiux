import styled from 'styled-components';

import { transparentTiles } from '@/theme/helpers';

export const CollaboratorsWrapper = styled.section`
  margin-bottom: 8rem;
`;

export const CollaboratorsTitle = styled.h2`
  font-size: 3.75rem;
`;
export const CollaboratorsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const CollaboratorsItem = styled.a`
  display: flex;
  flex: none;
  justify-content: center;
  align-items: center;
  width: calc(30% - 2rem);
  margin: 1rem;
  height: 15rem;
  outline: 1px dashed #888;
  ${transparentTiles}
`;

export const CollaboratorsItemPicture = styled.img`
  display: block;
  height: 60%;
  width: 100%;
  object-fit: contain;
`;
