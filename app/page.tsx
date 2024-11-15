import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:flex-row lg:px-8">
      {/* Left Section */}
      <div className="text-2xl sm:text-3xl w-full lg:w-1/2 px-4 sm:px-10 mb-8 lg:mb-0">
        <Image
          alt="Facebook logo"
          src={"/pictures/facebook.svg"}
          width={250}
          height={80}
          className="mx-auto lg:mx-0"
        />
        <p className="mx-auto mt-4 lg:ml-8 lg:mt-2 text-center lg:text-left">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>

      {/* Right Section */}
      <div className="bg-white flex flex-col p-4 sm:p-5 rounded-xl w-full max-w-sm lg:w-1/3 shadow-lg">
        <input
          className="focus:outline-1 outline-blue-600 my-2 border border-gray-300 p-3 rounded-md"
          type="text"
          placeholder="Email address or phone number"
        />
        <input
          className="focus:outline-1 outline-blue-600 my-2 border border-gray-300 p-3 rounded-md"
          type="password"
          placeholder="Password"
        />
        <button className="bg-blue-600 my-2 py-2 text-lg font-bold text-white rounded-md hover:bg-blue-700">
          Log in
        </button>
        <p className="text-blue-600 text-sm my-2 text-center hover:underline cursor-pointer">
          Forgotten password?
        </p>
        <div className="my-4">
          <hr className="border-gray-300" />
        </div>
        <button className="bg-orange-500 my-2 py-2 px-4 text-lg font-bold text-white rounded-md hover:bg-orange-600 w-full">
          Create new account
        </button>
      </div>
    </div>
  );
};

export default Home;
