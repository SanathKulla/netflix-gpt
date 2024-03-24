import React from "react";
import { BG_LOGO } from "../utils/constants";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { validateForm } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleToggle = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
    email.current.value = "";
    password.current.value = "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const hadleButtonClick = () => {
    const message = validateForm(
      email.current.value,
      password.current.value,
      userName.current?.value
    );
    setErrorMessage(message);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img src={BG_LOGO} alt="logo" className=""></img>
      </div>

      <form
        onSubmit={handleSubmit}
        className="absolute w-3/12 bg-black bg-opacity-90 py-16 px-12 rounded-lg left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
      "
      >
        <h1 className="text-3xl text-white px-4 py-2 h-12 my-2 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            placeholder="User Name"
            className="px-4 py-2 h-12 my-2 bg-slate-800 bg-opacity-&0 border-zinc-500 border-2 rounded-lg w-full text-white"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="px-4 py-2 h-12 my-2 bg-slate-800 bg-opacity-&0 border-zinc-500 border-2 rounded-lg w-full text-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-4 py-2 h-12 my-2 bg-slate-800 bg-opacity-80 border-zinc-500 border-2 rounded-lg w-full text-white"
        />
        <p className="text-red-700  text-lg p-2">{errorMessage}</p>
        <button
          onClick={hadleButtonClick}
          className="cursor-pointer bg-red-800 px-4 p-2 my-6 text-white  rounded-lg w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-slate-600">
          {isSignInForm ? "New to Netflix? " : "Already a existing User? "}
          <Link className="text-white" onClick={handleToggle}>
            {isSignInForm ? "Sign Up" : "Sign In"} Now
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
