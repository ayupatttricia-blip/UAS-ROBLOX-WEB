import React from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import career from "../assets/Career.png";
import match from "../assets/match.png";
import startBtn from "../assets/start.png";

export default function Splash() {

  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dashboard");
  };

  return (
  <div className="min-h-screen bg-[#14006B] flex items-center justify-center">

    {/* CONTAINER */}
    <div className="flex flex-col items-center">

      {/* LOGO + TEXT */}
      <div className="flex items-center -gap-100 mb-2">

          {/* LOGO */}
          <img
            src={logo}
            alt="logo"
            className="w-[140px]"
          />

          {/* CAREER MATCH */}
          <div className="flex flex-col">

            <img
              src={career}
              alt="career"
              className="w-[250px]"
            />

            <img
              src={match}
              alt="match"
              className="w-[220px] mt-1"
            />

          </div>
        </div>

        {/* START BUTTON */}
        <button
          onClick={handleStart}
          className="hover:scale-105 transition duration-300"
        >
          <img
            src={startBtn}
            alt="start"
            className="w-[260px]"
          />
        </button>

      </div>

    </div>
  );
}
