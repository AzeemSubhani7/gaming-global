// Libraries
import React, { useEffect, useState } from "react";
import { UserCircleIcon, MenuIcon } from "@heroicons/react/outline";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";

// SVG logo
import { ReactComponent as Logo } from "../logo/logo.svg";
import { ReactComponent as LogoText } from "../logo/logoText.svg";

// Utils
import { defaultButtonStyles } from "../Button/Button";

const Header = (props) => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);
  const handleBurgerMenu = () => {
    setBurgerMenuVisible((burgerMenuVisible) => !burgerMenuVisible);
  };
  const history = useHistory()
  // console.log(props)
  const [user, setUser] = useState(undefined)
  useEffect(() => {
    if(props.user) {
      setUser(props.user)
      // console.log(user)
    }
  },[props.user, user])
  return (
    <nav className="navigation">
      <div className="flex justify-between sm:justify-between items-center py-8 px-10 sm:px-20">
        <Link to="/">
          <div className="nav-logo flex space-x-4 items-center cursor-pointer transform hover:scale-110 transition-all duration-300">
            <Logo className="w-10 h-10 fill-current text-greyText hover:text-secondary transition-all duration-300" />
            <LogoText className="h-5 hidden sm:inline-block sm: w-28 fill-current text-greyText hover:text-secondary transition-all duration-300" />
          </div>
        </Link>
        <div className="hidden lg:flex nav primary md:text-sm lg:text-md text-lg md:space-x-5 lg:space-x-10 text-greyText items-center font-medium">
          <Link to="/statistics">
            <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
              Statistics
            </div>
          </Link>

          <Link to='/sensitivityconverter'>
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Sens Converter
          </div>
          </Link>
          <Link to="/patches">
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Patches
          </div>
          </Link>
          <Link to="/courses">
          <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
            Courses
          </div>
          </Link>
        </div>
        <div className="hidden lg:flex nav-logo cursor-pointer  items-center  text-greyText">
          {
            user 
            
            ? 
              <Link to='/profile/me' className="flex justify-center items-center hover:text-secondary transition-all duration-300 transform hover:scale-110">
                <UserCircleIcon className="h-6 w-6 " />
                <div className="text-lg ml-2">{user.user.userName}</div>
              </Link>
            :
              <div className="space-x-4">
                <button 
                onClick={() => history.push('/signup')}
                className={defaultButtonStyles}>Sign Up</button>
                <button 
                onClick={() => history.push('/login')}
                className={defaultButtonStyles}>Log In</button>
              </div>
          }
          
        </div>
        {/*The Mobile version of Nav goes here*/}
        <div className="lg:hidden nav-mobile">
          <button className="outline-none" onClick={() => handleBurgerMenu()}>
            <MenuIcon className="w-8 h-8 text-greyText hover:text-secondary" />
          </button>
        </div>
      </div>
      <Transition
        show={burgerMenuVisible}
        enter="transition-all ease-in-out duration-300 transform"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition-all ease-in-out duration-300 transform"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="-translate-y-full opacity-0"
      >
        <div
          className={`nav-mobile lg:hidden text-greyText space-y-2  p-10 ${
            burgerMenuVisible ? "block" : "hidden"
          }`}
        >
          <Link 
          to="/statistics"
          className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Statistics
          </Link>
          <Link 
          to='/sensitivityconverter'
          className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Sens Converter
          </Link>
          <Link 
          to="/patches"
          className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Patches
          </Link>
          <Link 
          to="/courses"
          className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
            Courses
          </Link>
          {
            user 
            
            ? 
            
              <Link 
              to='/profile/me'
              className="flex  items-center justify-center text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
                <UserCircleIcon className=" h-6 w-6 mr-2" />
                 {user.user.userName}
              </Link>
            
              
            :
              <div className="space-y-2">
              <Link 
              to="/login"
              className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
              Log In
            </Link>
            <Link 
            to="/signup"
            className="block text-center py-2 text-sm px-4 rounded-lg hover:bg-secondary hover:text-gray-50 transition-all duration-300">
              Sign Up
            </Link>
              </div>
          } 
        </div>
      </Transition>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { user: state.userState }
}

export default connect(mapStateToProps)(Header);
