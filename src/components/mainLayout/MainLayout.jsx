import React, { createContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const authContext = createContext();
const MainLayout = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        alert(result.user);
      })
      .catch(() => {
        alert(
          "already have an account with this email or something went wrong"
        );
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        alert("sign out successful");
        console.log(result);
      })
      .catch((error) => {
        alert("sign out error paici");
      });
  };

  const updatedUser = {
    user,

    handleLogin,
    handleSignUp,
    handleSignOut,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        alert("user is singed in...");
      } else {
        alert("user is signed out... ");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  return (
    <>
      <authContext.Provider value={updatedUser}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </authContext.Provider>
    </>
  );
};

export default MainLayout;
