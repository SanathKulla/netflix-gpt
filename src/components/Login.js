import React from "react";
import BG_LOGO from "../utils/BG_LOGO.jpg";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: userName.current.value,
          })
            .then(() => {
              const user = auth.currentUser;
              dispatch(
                addUser({
                  name: user.displayName,
                  email: user.email,
                  uid: user.uid,
                })
              );
            })
            .catch(() => {
              navigate("/error");
            });
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            setErrorMessage("Email already in use");
          } else {
            setErrorMessage(error.code + " " + error.message);
          }
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage("Invalid Credentials");
        });
    }
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
