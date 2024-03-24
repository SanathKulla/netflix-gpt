import React from "react";
import { BG_LOGO } from "../utils/constants";
import Header from "./Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div className="absolute ">
        <img src={BG_LOGO} alt="logo" className=""></img>
      </div>

      <form
        className="absolute w-3/12 bg-black bg-opacity-80 py-20 px-12 rounded-lg left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]
      grid grid-rows-3 grid-cols-1 gap-4"
      >
        <input
          type="text"
          placeholder="Email or phone number"
          className="p-4 m-2 bg-black bg-opacity-30 border-zinc-500 border-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 bg-black bg-opacity-30 border-zinc-500 border-2 rounded-lg"
        />
        <button className="bg-red-800 p-2 m-4 text-white  rounded-lg">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
