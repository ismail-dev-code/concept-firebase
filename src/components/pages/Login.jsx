import React, { useContext } from "react";
import { Link } from "react-router";

import { authContext } from "../mainLayout/MainLayout";

const Login = () => {
  const {handleLogin} = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password);
  };
  return (
    <div className="card max-w-sm mx-auto mt-16 bg-base-100 w-full shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-4">Log in here!</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label className="label mt-4">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label mt-4">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4" type="submit">
            Log In
          </button>
        </form>
        <p>
          New to this website? Please{" "}
          <Link className="text-blue-600 underline" to={"/signup"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
