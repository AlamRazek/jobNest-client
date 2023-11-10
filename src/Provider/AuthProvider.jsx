import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // googl sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // signUp/CreateUser

  const createUser = async (email, password, name, photo) => {
    setLoading(true);
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredentials.user, {
      displayName: name,
      photoURL: photo,
    });

    return userCredentials.user;
  };

  const signIn = async (email, password) => {
    setLoading(true);
    return await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const userLogOut = () => {
    setLoading(true);

    return signOut(auth);
  };

  const storedAuth = {
    user,
    createUser,
    signIn,
    loading,
    googleSignIn,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={storedAuth}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
