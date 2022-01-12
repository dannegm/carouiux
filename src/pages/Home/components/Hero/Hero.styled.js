import styled from 'styled-components';

export const HeroWrapper = styled.header``;

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32rem;
`;

export const HeroImage = styled.img`
    width: 20rem;
    flex: none;
    margin-right: 2rem;
`;

export const HeroContent = styled.div`
    flex: 1;
`;

export const HeroTitle = styled.h1`
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
`;

export const HeroSubtitle = styled.p`
    font-size: 3.125rem;
    line-height: 1;
    margin-top: 0.5rem;
`;
