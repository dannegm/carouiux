/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { SnackbarProvider } from 'notistack';

import { ThemeProvider } from '@material-ui/styles';
import { Container, Toolbar, Avatar, IconButton } from '@material-ui/core';
import { ExitToApp, Widgets } from '@material-ui/icons';

import useAuth from '@state/hooks/useAuth';
import GlobalStyle from '@utils/theme/GlobalStyle';
import theme from '@utils/theme/materialTheme';

import { ShellWrapper, AppBar, Spacer, Title } from './Shell.styled';

const Shell = ({ children }) => {
    const { user, requestLogout } = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SnackbarProvider maxSnack={5}>
                <ShellWrapper>
                    <AppBar position='static'>
                        <Toolbar>
                            <IconButton edge='start'>
                                <Widgets />
                            </IconButton>
                            <Title variant='h5'>Dashboard</Title>
                            <Spacer />
                            <Avatar src={user.photoURL} />
                            <IconButton edge='end' onClick={requestLogout}>
                                <ExitToApp />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Container fixed>{children}</Container>
                </ShellWrapper>
            </SnackbarProvider>
        </ThemeProvider>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Shell;
