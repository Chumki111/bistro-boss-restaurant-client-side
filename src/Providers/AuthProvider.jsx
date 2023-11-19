import {PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
        
    }
   

     const createUserWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
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
  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      })
}
    useEffect(() =>{
     const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser);
        if(currentUser){
            const userInfo = {email : currentUser.email}
              axiosPublic.post('/jwt',userInfo)
              .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access-token',res.data.token)
                }
              })
        } else{
           localStorage.removeItem('access-token')
        }
        console.log('currentUser---->',currentUser);
        setLoading(false)
     })
     return () =>{
         return unSubscribe();
     }
        
    },[axiosPublic])
    const authInfo = {
      user,loading,createUser,logInUser,logOut,updateUserProfile,createUserWithGoogle
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