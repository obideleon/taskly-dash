import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="w-screen h-screen bg-white sm:rounded-lg flex justify-center">
      <div className="flex-1 bg-blue-50 text-center hidden lg:flex">
        <div
          className="w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/img/login-bg.jpg)`,
          }}
        ></div>
      </div>
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 self-center">
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-7xl mb-16">
            Task<span className="text-blue underline">ly</span>
          </h1>
          <h2 className="text-2xl xl:text-3xl font-bold">Sign Up</h2>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-sm">
              <input
                className="w-full px-8 py-4 rounded-lg border border-white-100 placeholder-gray-50 text-sm focus:outline-none focus:border-gray-50 focus:bg-white"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full px-8 py-4 rounded-lg border border-white-100 placeholder-gray-50 text-sm focus:outline-none focus:border-gray-50 focus:bg-white mt-5"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-full px-8 py-4 rounded-lg border border-white-100 placeholder-gray-50 text-sm focus:outline-none focus:border-gray-50 focus:bg-white mt-5"
                type="password"
                placeholder="Confirm Password"
              />
              <p className="text-xs mt-2 text-right">
                <span>Have an account? </span>
                <Link href="/">
                  <a className="underline">Log in.</a>
                </Link>
              </p>
              <button className="mt-5 tracking-wide font-semibold bg-blue text-white-100 w-full py-4 rounded-lg hover:bg-blue-200 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Sign Up
              </button>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by Taskly's
                <a href="#" className="border-b border-gray-500 border-dotted">
                  <span> Terms of Service </span>
                </a>
                and its
                <a href="#" className="border-b border-gray-500 border-dotted">
                  <span> Privacy Policy</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
