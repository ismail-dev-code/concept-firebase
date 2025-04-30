import React, { useContext } from "react";
import { Link } from "react-router";
import { authContext } from "../mainLayout/MainLayout";

const SignUp = () => {
  const { handleSignUp } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // if (password.length < 6) {
    //   alert("Password must be six character or greater than six character..");
    //   return;
    // }
    // if (password !== confirmPassword) {
    //   alert("Password and Confirm Password should be Matched.");
    //   return;
    // }
    // if (!/(?=.*[a-z])/.test(password)) {
    //   alert("keep at least one lowercase..");
    //   return;
    // }
    // if (!/(?=.*[A-Z])/.test(password)) {
    //   alert("keep at least one uppercase..");
    //   return;
    // }
    // if (!/(?=.*\d)/.test(password)) {
    //   alert("keep at least one number..");
    //   return;
    // }

    handleSignUp(email, password);
  };
  return (
    <div className="card max-w-sm mx-auto mt-16 bg-base-100 w-full shrink-0 shadow-2xl">
      <h1 className="text-2xl font-bold text-center pt-4">Sign Up here!</h1>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <label className="label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="input"
            placeholder="Your Name"
          />
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
          <label className="label mt-4">Confirm Password</label>
          <input
            type="password"
            className="input"
            name="confirmPassword"
            placeholder="Password"
          />

          <button className="btn btn-neutral mt-4" type="submit">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? Please{" "}
          <Link className="text-blue-600 underline" to={"/login"}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
