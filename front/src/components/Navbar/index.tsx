import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/hot-air-balloon.svg"
            className="h-12"
            alt="Turobelix Logo"
          />
          <span className="self-center text-[20px] font-bold whitespace-nowrap font-istok-web drop-shadow-custom text-customOrange">
            Turobelix
          </span>
        </a>
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 inter"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 inter"
          >
            Activities
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 inter"
          >
            USD
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-blue-700 dark:text-white dark:hover:text-blue-500 inter"
          >
            Sign up
          </a>
          <button
            type="button"
            className="text-white bg-[#EB662B] hover:bg-[#cc541f] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-xl text-sm px-4 py-2 text-center dark:bg-[#EB662B] dark:hover:bg-[#cc541f] dark:focus:ring-orange-800"
          >
            Log in
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
