import { css } from 'styled-components';

import BwNistaGeometricDEMORegularWoff2 from '@/assets/fonts/BwNistaGeometricDEMO-Regular.woff2';
import BwNistaGeometricDEMORegularWoff from '@/assets/fonts/BwNistaGeometricDEMO-Regular.woff';

import BwNistaGeometricDEMOExtraBoldWoff2 from '@/assets/fonts/BwNistaGeometricDEMO-ExtraBold.woff2';
import BwNistaGeometricDEMOExtraBoldWoff from '@/assets/fonts/BwNistaGeometricDEMO-ExtraBold.woff';

const BwNistaGeometricDEMORgular = css`
  @font-face {
    font-family: 'Bw Nista Geometric DEMO';
    src:
      url('${BwNistaGeometricDEMORegularWoff2}') format('woff2'),
      url('${BwNistaGeometricDEMORegularWoff}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }
`;

const BwNistaGeometricDEMOExtraBold = css`
  @font-face {
    font-family: 'Bw Nista Geometric DEMO';
    src:
      url('${BwNistaGeometricDEMOExtraBoldWoff2}') format('woff2'),
      url('${BwNistaGeometricDEMOExtraBoldWoff}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }
`;

export { BwNistaGeometricDEMORgular, BwNistaGeometricDEMOExtraBold };
