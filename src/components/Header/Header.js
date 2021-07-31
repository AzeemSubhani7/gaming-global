import React, { useState } from "react";
import { ReactComponent as Logo } from "../logo/logo.svg";
import { ReactComponent as LogoText } from "../logo/logoText.svg";
import { UserCircleIcon, MenuIcon } from "@heroicons/react/outline";
import { Transition } from '@headlessui/react'

const Header = () => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const handleBurgerMenu = () => {
    setBurgerMenuVisible((burgerMenuVisible) => !burgerMenuVisible )
  }
  return (
    <nav className="navigation">
      <div className="flex justify-between sm:justify-between items-center py-8 px-10 sm:px-20">
        <div className="nav-logo flex space-x-4 items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
          <Logo className="w-10 h-10 fill-current text-greyText hover:text-secondary transition-all duration-300" />
          <LogoText className="h-5 hidden sm:inline-block sm: w-28 fill-current text-greyText hover:text-secondary transition-all duration-300" />
        </div>
        <div className="hidden md:flex nav primary md:text-sm lg:text-lg md:space-x-5 lg:space-x-10 text-greyText items-center font-medium">
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Statistics
          </div>
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Sens Converter
          </div>
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Patches
          </div>
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Courses
          </div>
        </div>
        <div className="hidden md:flex nav-logo cursor-pointer transform hover:scale-110 items-center hover:text-secondary transition-all duration-300 text-greyText">
          <UserCircleIcon className="h-6 w-6 " />
          <div className="text-lg ml-2">Azeem Subhani</div>
        </div>
        {/*The Mobile version of Nav goes here*/}
        <div className="md:hidden nav-mobile" >
          <button onClick={() => handleBurgerMenu()}>
            <MenuIcon className="w-8 h-8 text-greyText hover:text-secondary" />
          </button>
        </div>
      </div>
      <Transition
        show={burgerMenuVisible}
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-all ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className={`nav-mobile md:hidden text-greyText space-y-2  p-10 ${burgerMenuVisible ? 'block' : 'hidden'  }`}>
          <div className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Statistics
          </div>
          <div className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Sens Converter
          </div>
          <div className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Patches
          </div>
          <div className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Courses
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Header;
