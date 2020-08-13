import styled from 'styled-components';
import { Card } from 'react-bootstrap'

const ProjectsTitle = styled.h2`
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: bolder;
  font-size: 3rem;
`;

const CentriaCard = styled(Card)`
  width: 18rem;
  margin-left: -10vw;
  margin-top: 20vh;
`

export { ProjectsTitle, CentriaCard };
