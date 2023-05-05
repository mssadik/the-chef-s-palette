import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOUt = () =>{
        return signOut(auth);
    }

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const githubProvider = new GithubAuthProvider();
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile = () =>{
        updateProfile(auth.currentUser, {
            displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
    }

    
    

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            setUser(loggedUser)
            setLoading(false)
        })
        return () =>{
            unsubscribe();
        }
    }, [])

    const authInfo = { user, createUser, signUser, logOUt, googleLogin, githubLogin, updateUserProfile, loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
