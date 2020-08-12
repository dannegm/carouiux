import styled from 'styled-components';

const PageWrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Image = styled.img`
  height: 40%;
  margin: 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: normal;
`;

export { PageWrapper, Image, Title };
