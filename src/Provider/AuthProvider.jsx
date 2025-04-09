import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../Pages/firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadding] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoadding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Sign In
    const signIn = (email, password) => {
        setLoadding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignOut
    const logOut = () => {
        setLoadding(true);
        return signOut(auth);
    }

    // Update Profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoadding(false)
        });
        return () => {
            return unsubscribe();
        }

    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;