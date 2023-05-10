"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react"

const Navbar = () => {
  const { data: session } = useSession()
  // console.log(session)

  const [providers, setProviders] = useState(null)

  // console.log(providers)

  // useEffect(() => {
  //   (async () => {
  //     const res = await getProviders();
  //     console.log(res)
  //     setProviders(res);
  //   })();
  // }, [])

  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex py-4 justify-between px-4 border-b border-emerald-300 border-opacity-50 w-full">
      {/* logo */}
      <Link href='/'>
        <span className="font-extrabold text-lg md:text-4xl font-satoshi text-slate-500">
          prompto
          <span className="font-3xl text-emerald-700">
            Pedia
            <span className="text-black font-extrabold md:text-4xl text-2xl">
              .
            </span>{" "}
          </span>
        </span>
      </Link>

      {/* desktop */}

      {session?.user ? (
        <div className=" hidden md:flex gap-4 items-center">
          {/* create post button */}
          <button className="black_btn">Create Prompt</button>
          <div className="border border-red-500 rounded-full w-5 h-5">
            {/* User profile photo */}
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div className=" hidden md:flex items-center">
          {/* {
            providers && (
              Object.values(providers).map((provider) => {
                <button
                  className="black_btn"
                  type="button"
                  // key={provider.name}
                  onClick={() => signIn()}
                >
                Sign In  
                </button>
               })
            )
          } */}

          <button
            className="black_btn"
            type="button"
            // key={provider.name}
            onClick={() => signIn()}
          >
            Sign In
          </button>



        </div>
      )}

      {/* mobile */}

      {session?.user ? (
        <div className="md:hidden flex relative">
          <div className="border border-red-500 rounded-full w-10 h-10">
            {/* User profile photo */}
            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
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
        <>
          {/* {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className='black_btn'
              >
                Sign in
              </button>
            ))} */}

          <button
            className="black_btn"
            type="button"
            // key={provider.name}
            onClick={() => signIn()}
          >
            Sign In
          </button>

        </>
      )}
    </nav>
  );
};

export default Navbar;
