import React, { createContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

export const authContext = createContext();
const MainLayout = () => {
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
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
      .catch((error) => {
        console.log(error.message);
      });
  };

  const user = {
    handleLogin,
    handleSignUp,
  };

  return (
    <>
      <Navbar></Navbar>
      <authContext.Provider value={user}>
        <Outlet></Outlet>
      </authContext.Provider>
    </>
  );
};

export default MainLayout;
