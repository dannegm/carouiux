import styled from 'styled-components';

import MuiTypography from '@material-ui/core/Typography';
import MuiIconButton from '@material-ui/core/IconButton';

export const Spacer = styled.div`
  flex: 1;
`;

export const Title = styled(MuiTypography)`
  text-transform: uppercase;
  color: white;
`;

export const IconButton = styled(MuiIconButton)`
  & svg {
    color: white;
  }
`;
