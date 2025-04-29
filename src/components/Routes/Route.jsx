import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import MainLayout from "../mainLayout/MainLayout";
import About from "../pages/About";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, path: "/", Component: Home },
        { path: "/about", Component: About },
        { path: "/login", Component: Login },
        { path: "/signin", Component: Signin },
      ],
    },
  ]);