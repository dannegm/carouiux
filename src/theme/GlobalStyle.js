import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import {
  BwNistaGeometricDEMORgular,
  BwNistaGeometricDEMOExtraBold,
} from './fontFaces';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${BwNistaGeometricDEMORgular}
  ${BwNistaGeometricDEMOExtraBold}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Bw Nista Geometric DEMO', Helvetica, Arial, sans-serif;
    font-size: 16px;
  }

  a {
    cursor: pointer;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyle;
