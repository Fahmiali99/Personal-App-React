import React from "react";
import { data } from "../utils/navbar";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";

interface NavigationProps {
  toggleMenu: () => void;
  buttonBright: () => void;
  bright?: boolean;
  navbar: boolean;
}

function NavigationBar({
  toggleMenu,
  buttonBright,
  bright,
  navbar,
}: NavigationProps) {
  const isActive = false;

  return (
    <div>
      <div className=" px-2 sm:px-0 py-2.5 dark:bg-gray-900">
        <div className="  flex flex-wrap items-center justify-between ">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              className="h-10 mr-3 sm:h-10 "
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
              Li.
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  onClick={buttonBright}
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <button
              onClick={toggleMenu}
              data-collapse-toggle="navbar-sticky"
              type="button"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              className={
                bright
                  ? `inline-flex md:hidden  text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center  md:mr-0 border-2 border-gray-700 `
                  : `inline-flex md:hidden text-gray-500 font-medium rounded-lg text-sm px-3 py-2.5 text-center  md:mr-0 border shadow-slate-200 shadow-md `
              }
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={` mt-2 sm:mt-5 md:mt-0 items-center justify-between  w-full md:flex md:w-auto md:order-1 ${
              navbar ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            {data.map((item, idx) => {
              return (
                <div key={idx} className="p-0 sm:p-3  ">
                  <ul className="flex-1 justify-self-center  md:block md:pb-0 md:mt-0 ">
                    <li>
                      <NavLink
                        to={item.href}
                        className={
                          isActive
                            ? "active block py-2 pl-3 pr-4  md:p-0 dark:text-white  "
                            : ""
                        }
                        aria-current="page"
                      >
                        <label className="font-medium py-1 link link-underline bg-gradient-to-r from-sky-500 to-indigo-500">
                          {item.title}
                        </label>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
