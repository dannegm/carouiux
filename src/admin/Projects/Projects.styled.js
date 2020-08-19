import styled from 'styled-components';

import MuiButton from '@material-ui/core/Button';
import MuiCardHeader from '@material-ui/core/CardHeader';
import MuiBreadcrumbs from '@material-ui/core/Breadcrumbs';

export const Wrapper = styled.div`
  margin-top: 2rem;
`;

export const CardHeaderButton = styled(MuiButton)`
  &.MuiButton-root {
    box-shadow: none;
    margin-left: 0.5rem;
  }
`;

export const CardHeader = styled(MuiCardHeader)`
  & .MuiCardHeader-action {
    margin-top: 0;
    margin-right: 0;
  }
`;

export const Breadcrumbs = styled(MuiBreadcrumbs)`
  &.MuiBreadcrumbs-root {
    display: flex;
    font-size: 1.5rem;
  }
`;
