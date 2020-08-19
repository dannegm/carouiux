import styled from 'styled-components';

import MuiAppBar from '@material-ui/core/AppBar';
import MuiTypography from '@material-ui/core/Typography';

export const Spacer = styled.div`
  flex: 1;
`;

export const AppBar = styled(MuiAppBar)`
  &.MuiAppBar-root {
    & .MuiSvgIcon-root {
      color: #fff;
    }
  }
`;

export const Title = styled(MuiTypography)`
  text-transform: uppercase;
`;
