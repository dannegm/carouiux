import styled, { css } from 'styled-components';

const columWidths = {
    '1x': '100%',
    '1x2': '50%',
    '1x3': '33%',
    '2x3': '66%',
};

export const PageWrapper = styled.div`
    background-color: #fff;
    min-height: 100vh;
`;

export const ProjectWrapper = styled.div``;

export const Title = styled.h1`
    font-size: 2.875rem;
`;

export const Table = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TableRow = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
`;

export const TableTitle = styled.div`
    flex: none;
    width: 14rem;
    font-size: 1.875rem;
`;

export const TableContent = styled.div`
    flex: 1;
    font-size: 1.875rem;
`;

export const MediumColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MediumRow = styled.div`
    display: flex;

    ${({ distribution }) => css`
        & ${MediumColumn}:first-child {
            flex: none;
            width: ${columWidths[distribution]};
        }
    `}
`;

export const MediumContent = styled.div`
    display: flex;
    flex-direction: column;

    & h2 {
        font-size: 2.875rem;
    }
    & h3 {
        font-size: 2.2rem;
    }

    & div {
        font-size: 1.875rem;
    }
    & p {
        font-size: 1.875rem;
    }

    & img {
        display: block;
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
`;
