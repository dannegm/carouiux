import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import GlobalStyle from '@/theme/GlobalStyle';
import theme from '@/theme/materialTheme';
import { ThemeProvider } from '@material-ui/styles';

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

import { Spacer, Title, IconButton } from './Shell.styled';

import { ExitToApp, Widgets } from '@material-ui/icons';

import useAuth from '@/state/hooks/useAuth';

const Shell = ({ children }) => {
  const { user, requestLogout } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <Widgets />
          </IconButton>
          <Title variant="h5">Dashboard</Title>
          <Spacer />
          <Avatar src={user.photoURL} />
          <IconButton edge="end" onClick={requestLogout}>
            <ExitToApp />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container fixed>{children}</Container>
    </ThemeProvider>
  );
};

Shell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Shell;
