import React from 'react';

import {
  LoginWrapper,
  LoginAvatar,
  LoginTitle,
  LoginDescription,
  LoginToken,
  BlueText,
  PurpleText,
  LoginPrimaryButton,
  LoginLinkButton,
} from './Login.styled';

import { Widgets } from '@material-ui/icons';

import useAuth from '@/state/hooks/useAuth';

const LoginScreen = ({ requestLogin }) => {
  return (
    <LoginWrapper>
      <LoginAvatar variant="rounded">
        <Widgets />
      </LoginAvatar>
      <LoginTitle>Dashboard</LoginTitle>
      <LoginDescription>
        Inicia sesión con tu cuenta de <BlueText>Google</BlueText> para acceder
        al <PurpleText>dashboard</PurpleText>.
      </LoginDescription>
      <LoginPrimaryButton
        variant="contained"
        size="large"
        onClick={() => requestLogin()}
      >
        Inicia con Google
      </LoginPrimaryButton>
    </LoginWrapper>
  );
};

const UnauthorizedScreen = ({ user, requestLogin, requestLogout }) => {
  return (
    <LoginWrapper>
      <LoginAvatar variant="rounded" src={user.photoURL} />
      <LoginTitle>Bienvenido</LoginTitle>
      <LoginDescription>
        No tienes permisos para acceder al <PurpleText>dashboard</PurpleText>,
        <br />
        proporciona el siguiente código a tu administrador para obtener acceso.
      </LoginDescription>

      <LoginToken>{user.uid}</LoginToken>

      <LoginPrimaryButton
        variant="contained"
        size="large"
        onClick={() => requestLogin()}
      >
        Cambiar de cuenta
      </LoginPrimaryButton>
      <LoginLinkButton onClick={() => requestLogout()}>
        Cerrar sesión
      </LoginLinkButton>
    </LoginWrapper>
  );
};

const Login = () => {
  const { hasSession, user, requestLogin, requestLogout } = useAuth();

  return !hasSession ? (
    <LoginScreen requestLogin={requestLogin} />
  ) : (
    <UnauthorizedScreen
      requestLogin={requestLogin}
      requestLogout={requestLogout}
      user={user}
    />
  );
};
export default Login;
