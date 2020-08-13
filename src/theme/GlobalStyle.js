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
    font-size: 14px;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Bw Nista Geometric DEMO', Helvetica, Arial, sans-serif;
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
