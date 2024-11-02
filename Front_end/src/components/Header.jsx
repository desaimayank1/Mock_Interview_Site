import React, { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearUser} from '../features/authSlice';

export default function Header() {
  

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/success", { withCredentials: true });
      dispatch(setUser(response.data.user));
    } catch (error) {
      console.log("getUser", error);
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  const UserLogOut = () => {
    dispatch(clearUser());
    window.location.href = "http://localhost:3000/auth/logout";
  }

  const [showinfo, setShowinfo] = useState(0);
  const handleShowinfoClick = () => {
    if (showinfo === 0) {
      setShowinfo(1);
    } else {
      setShowinfo(0);
    }
  }
  return (
    <>
      <nav className="bg-gray-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {/*
      Icon when menu is closed.

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/*
      Icon when menu is open.

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://cdn-icons-png.flaticon.com/512/4942/4942358.png"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <a
                    href="/"
                    className={`rounded-md  px-3 py-2 text-sm font-medium  ${location.pathname === '/' ? 'text-white bg-gray-900' : 'text-black hover:bg-gray-700 hover:text-white'}`}
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="/Book"
                    className={`rounded-md  px-3 py-2 text-sm font-medium  ${location.pathname === '/Book' ? 'text-white bg-gray-900' : 'text-black hover:bg-gray-700 hover:text-white'}`}
                  >
                    Book
                  </a>
                  <a
                    href="/About"
                    className={`rounded-md  px-3 py-2 text-sm font-medium  ${location.pathname === '/About' ? 'text-white bg-gray-900' : 'text-black hover:bg-gray-700 hover:text-white'}`}
                  >
                    About
                  </a>
                  <a
                    href="/Contact"
                    className={`rounded-md  px-3 py-2 text-sm font-medium  ${location.pathname === '/Contact' ? 'text-white bg-gray-900' : 'text-black hover:bg-gray-700 hover:text-white'}`}
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-blue-400 p-1 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                  />
                </svg>
              </button>
              {/* Profile dropdown */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={handleShowinfoClick}
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={userData.image}
                      alt=""
                    />
                  </button>


                </div>
                {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                <div
                  className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${showinfo ? 'block' : 'hidden'} `}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </a>
                  <a
                    onClick={UserLogOut}
                    className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
            <a
              href="#"
              className="block rounded-md bg-white-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Book
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

    </>
  )
}