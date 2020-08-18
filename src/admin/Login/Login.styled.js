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
  width: 5rem !important;
  height: 5rem !important;
  background-color: #eaeaea !important;

  & svg {
    font-size: 3rem !important;
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
  box-shadow: none !important;
  border-radius: 4rem !important;
  background-color: #3f51b5 !important;
  color: #fff !important;
  margin-top: 2rem !important;
`;

export const LoginLinkButton = styled(Button)`
  margin-top: 1rem !important;
`;
