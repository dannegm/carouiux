import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { doc, getDoc } from 'firebase/firestore';
import { signInWithPopup, onAuthStateChanged, signOut, GoogleAuthProvider } from 'firebase/auth';
import { auth, db, dbCollections } from '../../services/firebase';

const googleAuthProvider = new GoogleAuthProvider();

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

    onAuthStateChanged(auth, async (authUser) => {
        if (authUser) {
            setUser(authUser);
            const usersDoc = doc(db, dbCollections.USERS, authUser.uid);
            const usersSnapshot = await getDoc(usersDoc);

            setSession(true);
            setAuthorized(usersSnapshot.exists());
        } else {
            setUser(INITIAL_USER);
            setSession(false);
            setAuthorized(false);
        }
    });

    const requestLogin = async () => {
        await signInWithPopup(auth, googleAuthProvider);
    };

    const requestLogout = async () => {
        await signOut(auth);
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
