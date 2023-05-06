"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const isUser = true;

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex py-4 justify-between px-4 border-b border-emerald-300 border-opacity-50 w-full">
      {/* logo */}
      <div>
        <span className="font-extrabold text-lg md:text-4xl font-satoshi text-slate-500">
          prompto
          <span className="font-3xl text-emerald-700">
            Pedia
            <span className="text-black font-extrabold md:text-4xl text-2xl">
              .
            </span>{" "}
          </span>
        </span>
      </div>

      {/* desktop */}

      {isUser ? (
        <div className=" hidden md:flex gap-4 items-center">
          {/* create post button */}
          <button className="black_btn">Create Prompt</button>
          <div className="border border-red-500 rounded-full w-5 h-5">
            {/* User profile photo */}
          </div>
        </div>
      ) : (
        <div className=" hidden md:flex items-center">
          <button className="black_btn">Sign In</button>
        </div>
      )}

      {/* mobile */}

      {isUser ? (
        <div className="md:hidden flex relative">
          <div className="border border-red-500 rounded-full w-10 h-10">
            {/* User profile photo */}
            <div
              onClick={() => setToggleDropDown((prev) => !prev)}
              className="h-10 w-10"
            ></div>

            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropDown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="md:hidden flex ">
          <button className="black_btn text-sm">Sign In</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
