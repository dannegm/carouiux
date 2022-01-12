import styled from 'styled-components';

import { Avatar, Button } from '@material-ui/core';

export const LoginWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const LoginAvatar = styled(Avatar)`
    &.MuiAvatar-root {
        width: 5rem;
        height: 5rem;
        background-color: #eaeaea;

        & svg {
            font-size: 3rem;
        }
    }
`;

export const LoginTitle = styled.h1`
    font-weight: normal;
    margin-top: 4rem;
`;

export const LoginDescription = styled.p`
    color: #6b6b6b;
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
`;

export const LoginToken = styled.code`
    display: block;
    color: white;
    background-color: #1e2c31;
    font-family: monospace;
    padding: 1rem;
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
`;

export const BlueText = styled.span`
    font-weight: bold;
    color: #3f51b5;
`;

export const PurpleText = styled.span`
    font-weight: bold;
    color: #e040fb;
`;

export const LoginPrimaryButton = styled(Button)`
    &.MuiButton-root {
        box-shadow: none;
        border-radius: 4rem;
        background-color: #3f51b5;
        color: #fff;
        margin-top: 2rem;
    }
`;

export const LoginLinkButton = styled(Button)`
    &.MuiButton-root {
        margin-top: 1rem;
    }
`;
