import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUserEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailPass = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser,"current user")
            setUser(currentUser)
            setLoading(false);
        });

        return () => {
            unSubscribe()
        }

    }, [])

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // console.log("authprovider", user)
    const authInfo = {
        createUserEmailPass,
        loginWithEmailPass,
        user,
        setUser,
        logOut,
        loading,
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {

    children: PropTypes.node,

}