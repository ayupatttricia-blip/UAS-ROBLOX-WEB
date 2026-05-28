import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

export default function Signup() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {

    try {

      const result = await signInWithPopup(
        auth,
        provider
      );

      console.log(result.user);

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

    }

  };

  // EMAIL SIGN UP
  const handleSignup = async () => {

    try {

      // CREATE ACCOUNT
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      // SAVE USERNAME
      await updateProfile(userCredential.user, {
        displayName: username,
      });

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(error.message);

    }

  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] overflow-hidden">

      {/* TOP BAR */}
      <div className="bg-[#F48FB1] px-14 py-5 flex items-center">

        <div className="flex gap-14">

          {/* SIGN UP */}
          <button
            className="text-4xl font-bold text-white border-b-2 border-[#14006B]"
          >
            Sign up
          </button>

          {/* SIGN IN */}
          <button
            onClick={() => navigate("/signin")}
            className="text-4xl font-bold text-white hover:text-[#14006B] transition"
          >
            Sign in
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center py-12">

        {/* CARD */}
        <div className="mt-8 w-[560px] bg-white rounded-[28px] shadow-lg border border-[#E5E5E5] p-10">

          {/* TEXT */}
          <div className="text-left">

            <h1 className="text-5xl font-bold text-black">
              Create Account
            </h1>

            <p className="text-[22px] text-[#4B4B6B] leading-tight mt-4">
              Start your career journey with CareerMatch
            </p>

          </div>

          {/* FORM */}
          <div className="mt-8 flex flex-col gap-4">

            {/* USERNAME */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-5 py-3 rounded-xl text-lg outline-none border border-gray-300"
            />

            {/* EMAIL */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-xl text-lg outline-none border border-gray-300"
            />

            {/* PASSWORD */}
            <div className="relative">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-5 py-3 rounded-xl text-lg outline-none border border-gray-300"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-500"
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {/* CREATE ACCOUNT */}
            <button
              onClick={handleSignup}
              className="w-full bg-[#F48FB1] text-white py-3 rounded-[16px] text-xl font-bold mt-6 hover:bg-pink-400 transition"
            >
              Create Account
            </button>

          </div>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="text-gray-500 text-sm">
              OR
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* GOOGLE BUTTON */}
          <button
            onClick={handleGoogleLogin}
            className="w-full border border-gray-300 py-3 rounded-[16px] text-lg font-semibold flex items-center justify-center gap-3 hover:bg-gray-50 transition"
          >

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="google"
              className="w-6 h-6"
            />

            Sign up with Google

          </button>

        </div>

      </div>

    </div>
  );
}