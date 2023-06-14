import { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import axios from "axios";
import {
   getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, updateProfile, signOut,
   onAuthStateChanged
} from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);
   // const [position, setPosition] = useState(null);

   // useEffect(() => {
   //    if (user) {
   //       getRole(user.email)
   //          .then(data => setRole(data));
   //    }
   // }, [user]);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const resetPassword = email => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const updateUserProfile = (name, photo) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         // console.log('current user', currentUser);
         //=================>>>use axios<<<=============
         if (currentUser) {
            axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {
               email: currentUser?.email
            })
               .then(data => {
                  // console.log(data.data.token);
                  localStorage.setItem('access-token', data.data.token);
                  setLoading(false);
               });
         }
         else {
            localStorage.removeItem('access-token');
            setLoading(false);
         }
      });
      return () => {
         return unsubscribe();
      };
   }, []);

   const authInfo = {
      user,
      loading,
      setLoading,
      createUser,
      signIn,
      signInWithGoogle,
      resetPassword,
      logOut,
      updateUserProfile,
   };

   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;
