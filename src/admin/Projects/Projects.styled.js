import styled from 'styled-components';

import MuiButton from '@material-ui/core/Button';
import MuiCardHeader from '@material-ui/core/CardHeader';

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const CardHeaderButton = styled(MuiButton)`
  box-shadow: none !important;
  margin-left: 0.5rem !important;
`;

export const CardHeader = styled(MuiCardHeader)`
  & .MuiCardHeader-action {
    margin-top: 0;
    margin-right: 0;
  }
`;
