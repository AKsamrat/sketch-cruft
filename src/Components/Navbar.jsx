import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo.png';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = ({ setDarkMode, darkMode }) => {
  const navigate = useNavigate();
  const [sideOpen, setSideOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [theme, setTheam] = useState('light');

  const { user, logOut } = useContext(AuthContext) || {};

  const handleSignout = () => {
    logOut().then(toast('successfully Logged Out')).catch();
  };
  const handleToogle = e => {
    if (e.target.checked) {
      setTheam('dark');
      setDarkMode(!darkMode);
    } else {
      setTheam('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div className="max-w-[1920px] mx-auto mt-5">
      <header className="bg-white shadow-lg  flex w-full dark:bg-[#120505] px-5 md:px-[50px] lg:px-[80px] ">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artAndCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Art & Craft</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Add Craft</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>My Craft</span>
              </NavLink>
              {/* <Link to="/myCart">My Added Product</Link> */}
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className=" flex flex-shrink-0 items-center  md:w-[280px] w-[150px] "
        >
          <img
            className=" md:w-[280px] w-full lg:h-[70px] h-[40px]  "
            src={logo}
            alt=""
          />
        </Link>
        {/* middle */}
        <nav className="header-links md:contents font-medium text-base  hidden ">
          <ul className="flex gap-8 items-center ml-4 xl:ml-8 mr-auto w-full justify-center dark:text-white">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artAndCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Art & Craft</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>Add Craft</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myCraft"
                className={({ isActive, isPending }) =>
                  isPending
                    ? 'pending'
                    : isActive
                    ? 'text-[#FF497C] border-b-4 border-[#FF497C]'
                    : 'hover:text-[#FF497C]'
                }
              >
                <span>My Craft</span>
              </NavLink>
              {/* <Link to="/myCart">My Added Product</Link> */}
            </li>
          </ul>
        </nav>

        {/* End */}
        <div className="  flex items-center  justify-end w-full md:w-auto lg:w-72  ">
          <div className=" w-[50px]">
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleToogle}
                type="checkbox"
                // value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
          <div
            className="tooltip   rounded-full mr-2"
            data-tip={user?.displayName}
          >
            {user && (
              <img
                className="w-12  rounded-full h-12 "
                alt="profile pic"
                src={user?.photoURL}
              />
            )}
          </div>

          {user ? (
            <Link
              className="btn bg-[#AD8B00] text-white"
              onClick={handleSignout}
            >
              SignOut
            </Link>
          ) : (
            <div className="flex justify-center items-center pl-2">
              <Link
                to={'/login'}
                onClick=""
                className="btn bg-[#AD8B00] text-white"
              >
                LogIn
              </Link>
              <Link
                to={'/register'}
                onClick=""
                className="btn bg-[#AD8B00] text-white hidden md:flex"
              >
                Sign Up
              </Link>
            </div>
          )}

          {/* user Menu */}
        </div>

        {/* Drawer */}
      </header>

      {/* Side Menu */}
      {/* transition-transform transform -translate-x-full */}
    </div>
  );
};

export default Navbar;
