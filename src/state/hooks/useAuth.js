import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { firebase, auth, db } from '@/services/firebase';

const GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();

const INITIAL_USER = {
  uid: uuid(),
  email: 'none@mail.com',
  displayName: 'UNKNOWN',
  photoURL: '#',
  isAdmin: false,
};

const useAuth = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [isAuthorized, setAuthorized] = useState(false);
  const [hasSession, setSession] = useState(false);

  auth.onAuthStateChanged(async (authUser) => {
    if (authUser) {
      setUser(authUser);
      const usersSnapshot = await db
        .collection('users')
        .doc(authUser.uid)
        .get();
      setSession(true);
      setAuthorized(usersSnapshot.exists);
    } else {
      setUser(INITIAL_USER);
      setSession(false);
      setAuthorized(false);
    }
  });

  const requestLogin = async () => {
    await auth.signInWithPopup(GoogleAuthProvider);
  };

  const requestLogout = async () => {
    await auth.signOut();
    setSession(false);
    setAuthorized(false);
  };

  return {
    isAuthorized,
    hasSession,
    user,
    requestLogin,
    requestLogout,
  };
};

export default useAuth;
