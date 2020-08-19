import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const accentColor = '#7D3F88';
const elevation =
  '0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12)';

export const DropZonePicture = styled.img`
  width: 100%;
  height: 302px;
  object-fit: cover;
  background-color: rgba(0 0 0 / 0.2);
`;

export const DropZoneMessage = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  cursor: pointer;
`;

export const DropZoneIcon = styled.div`
  margin: 1rem;

  & svg {
    font-size: 2rem;
  }
`;

export const DropZoneDescription = styled.p`
  font-size: 1rem;
  margin: 0.5rem;
  text-align: center;
`;

export const DropZoneWrapper = styled.div`
  user-select: none;
  height: 394px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: ${elevation};
  margin: 1rem;
  transition: all 0.2s;

  ${({ dragOver }) =>
    dragOver &&
    css`
      border-color: ${accentColor};
      background-color: ${rgba(accentColor, 0.1)};
    `}

  ${({ hasError, dragOver }) =>
    hasError &&
    !dragOver &&
    css`
      border-color: #b25235;
    `}

  & ${DropZonePicture} + ${DropZoneMessage} {
    flex: none;
    height: auto;
    flex-direction: row;
    justify-content: flex-start;

    & ${DropZoneDescription} {
      text-align: left;
    }
  }
`;

export const FilePicker = styled.input`
  display: none;
`;
