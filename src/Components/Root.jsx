import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  // const [theme, setTheam] = useState('light');

  // useEffect(() => {
  //   localStorage.setItem('theme', theme);
  //   const localTheme = localStorage.getItem('theme');
  //   document.querySelector('html').setAttribute('data-theme', localTheme);
  // }, []);
  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} dark:bg-[#0F172A] h-screen`}
    >
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode}></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
