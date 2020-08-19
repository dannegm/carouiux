import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';

import GlobalStyle from '@/theme/GlobalStyle';
import theme from '@/theme/materialTheme';
import { ThemeProvider } from '@material-ui/styles';

import { Container, Toolbar, Avatar, IconButton } from '@material-ui/core';

import { AppBar, Spacer, Title } from './Shell.styled';

import { ExitToApp, Widgets } from '@material-ui/icons';

import useAuth from '@/state/hooks/useAuth';

const Shell = ({ children }) => {
  const { user, requestLogout } = useAuth();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SnackbarProvider maxSnack={5}>
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
      </SnackbarProvider>
    </ThemeProvider>
  );
};

Shell.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Shell;
