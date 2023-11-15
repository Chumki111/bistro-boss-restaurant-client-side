import {PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        
    }

    const logInUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
 const logOut = () =>{
    setLoading(true)
   return signOut(auth)
}

const updateUserProfile = (name,photoURL) =>{
    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
}
    useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        console.log('currentUser---->',currentUser);
        setLoading(false)
     })
     return () =>{
         return unSubscribe();
     }
        
    },[])
    const authInfo = {
      user,loading,createUser,logInUser,logOut,updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children:PropTypes.node
}
export default AuthProvider;