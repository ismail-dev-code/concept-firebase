import { createBrowserRouter } from "react-router";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MainLayout from "../mainLayout/MainLayout";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      children: [
        { index: true, path: "/", Component: Home },
        { path: "/about", Component: About },
        { path: "/login", Component: Login },
        { path: "/blogs", Component: Blogs },
        { path: "/profile", Component: Profile },
        { path: "/signup", Component: SignUp },
      ],
    },
  ]);