import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // loading state
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    // user register 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user register with google
    const provider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    // user login 
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    // user log out 
    const UserLogOut = () => {
        setLoading(true);
        signOut(auth);
    }

    // on auth state change handle
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const authInfo = {
        loading,
        createUser,
        user,
        userLogin,
        UserLogOut,
        createUserWithGoogle,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AuthProvider;