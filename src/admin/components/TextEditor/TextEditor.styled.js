import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import Editor from 'react-medium-editor';

const accentColor = '#7D3F88';

export const TextEditorWrapper = styled.div`
    margin-top: 2rem;
`;

export const Toolbar = styled.div`
    display: flex;
    margin-bottom: 1rem;

    & > * {
        margin-right: 1rem;
    }
`;

export const ColWrapper = styled.div`
    display: block;
    flex: 1;
    border: 1px solid #ccc;
    padding: 0.5rem;
    border-radius: 4px;
`;

export const ColContent = styled.div`
    display: block;
`;

export const ActionsWrapper = styled.div`
    display: flex;
`;

export const Spacer = styled.div`
    flex: 1;
`;

export const TextWrapper = styled.div``;

export const CustomEditor = styled(Editor)`
    outline: 0;
    overflow: hidden;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 3px;

    &[data-medium-focused] {
        background-color: ${rgba(accentColor, 0.05)};
    }
`;

export const ImageWrapper = styled.div`
    margin: -1rem;
    margin-top: 1rem;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 4px;
    margin-bottom: 1rem;

    & ${ColWrapper} + ${ColWrapper} {
        margin-left: 0.5rem;
    }
`;

const columWidths = {
    '1x': '100%',
    '1x2': '50%',
    '1x3': '33%',
    '2x3': '66%',
};

export const RowContent = styled.div`
    display: flex;
    overflow: hidden;
    ${({ distribution }) => css`
        & ${ColWrapper}:first-child {
            flex: none;
            width: ${columWidths[distribution]};
        }
    `}
`;
