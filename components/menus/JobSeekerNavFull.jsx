"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState,  useEffect, useRef } from "react";


const JobSeekerNav = () => {

  const [hideHeadHunterNav, setHideHeadHunterNav] = useState(true);
  const [hideJobSeekerNav, setHideJobSeekerNav] = useState(false);

  const handleNavChangeClick = () => {
    setHideHeadHunterNav(!hideHeadHunterNav);
    setHideJobSeekerNav(!hideJobSeekerNav);
  };


    const [toggleDropdown, setToggleDropdown] = useState(false);
  
  const navRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setToggleDropdown(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
<nav className='flex-col flex-between w-full mb-0 pt-3 px-5 pb-2' ref={navRef}>
    {!hideJobSeekerNav &&
    <JobSeekerNav />
    }
<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

<button data-collapse-toggle="mega-menu-full" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-full" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
</button>
<div id="mega-menu-full" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">

<Link href='/' className='flex gap-2 flex-center absolute left-2 top-2 md:top-6'>
    <Image 
    src='/assets/images/logo-beta.svg'
    alt='logo'
    width={150}
    height={40}
    className='object-contain'
    priority
    />
  </Link>

  </div>
  </div>

{/* MEGAMENU */}


{!hideHeadHunterNav &&
    <ul id='HeadHunterNav' className="flex flex-col mt-4 md:mt-0 font-medium md:flex-row md:space-x-8 ">

        <li>
            <a href="/candidates-search" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Software</a>
        </li>
        <li>
            <button onClick={() => setToggleDropdown((prev) => !prev)} id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" className=" flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Company <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
        </li>
        <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
        </li>
        <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
        </li>
        <li>
            <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
    </ul>
}

{toggleDropdown &&
  (
<div id="mega-menu-full-dropdown"  className="absolute mt-20 bg-white z-10 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 ">
<div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
    <ul aria-labelledby="mega-menu-full-dropdown-button">
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
    </ul>
    <ul>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Online Stores</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Segmentation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing CRM</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
    </ul>
    <ul className="hidden md:block">
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Audience Management</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Creative Tools</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
        <li>
            <a href="#" className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                <div className="font-semibold">Marketing Automation</div>
                <span className="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that you're already using.</span>
            </a>
        </li>
    </ul>
</div>
</div>
)}


{/* TOGGLE NAV-TYPE */}

<div className='absolute right-48 top-4 md:top-10'>
<label className="relative inline-flex items-center cursor-pointer">
  <input onClick={handleNavChangeClick} type="checkbox" value="" className="sr-only peer" />
  <div className="w-11 h-6 bg-purple-500  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  {!hideJobSeekerNav && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Job Seekers</span>}
  {!hideHeadHunterNav && <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Head Hunters</span>}
</label>
</div>

    </nav>

  )
}

export default JobSeekerNav