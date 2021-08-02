// Libraries
import React from "react";
import { Link } from 'react-router-dom'

// Importing SVG LOGO
import { ChevronRightIcon } from '@heroicons/react/solid'
import { ReactComponent as Logo } from "../logo/logo.svg";
import { ReactComponent as LogoText } from "../logo/logoText.svg";

const Footer = () => {
  return (
    <div className=" flex flex-col text-white  m-5">
      <div style={{ height: "80%" }} className="footer-upper-part rounded-xl bg-primary-light p-5 mt-4 flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 justify-around flex-wrap">
        <div className="Logo-And-Info space-y-5 flex flex-col justify-center items-start ">
        <Link to="/">
          <div className="logo space-x-5 flex justify-between items-center ">
            <Logo className="h-10 w-10 fill-current text-greyText hover:text-secondary transition-all duration-300" />
            <LogoText className="h-6 w-24 fill-current text-greyText hover:text-secondary transition-all duration-300" />
          </div>
          </Link>
          <div className="text-sm text-greyText text-center">
            This is Final Year project <br /> of YAM's squad.
          </div>
        </div>
        <div className="useFull-Links flex flex-col items-center">
          <div className="text-lg text-greyText text-center cursor-default border-secondary border-b-4 rounded-sm ">Useful Links</div>
          <div className="space-y-2 mt-3">
          <div className="flex cursor-pointer hover:text-secondary transition-all duration-300 space-x-3 items-center text-xs text-greyText"><Link className="flex" to="/"><ChevronRightIcon className="h-4 w-4 " /> Home</Link></div>
          <div className="flex cursor-pointer hover:text-secondary transition-all duration-300 space-x-3 items-center text-xs text-greyText"><Link className="flex" to="/statistics"><ChevronRightIcon className="h-4 w-4 " /> Statistics</Link></div>
          <div className="flex cursor-pointer hover:text-secondary transition-all duration-300 space-x-3 items-center text-xs text-greyText"><Link className="flex" to='/sensitivityconverter'><ChevronRightIcon className="h-4 w-4 " /> Sensitivity</Link></div>
          <div className="flex cursor-pointer hover:text-secondary transition-all duration-300 space-x-3 items-center text-xs text-greyText"><Link className="flex" to="/courses"><ChevronRightIcon className="h-4 w-4 " /> Courses</Link></div>
            
          </div>
        </div>
        <div className="flex flex-col">
        <div className="Contact-us text-lg text-center text-greyText cursor-default border-secondary border-b-4 rounded-sm">Contact info</div>
        <div className="space-y-3 mt-3">
          <div className="text-xs text-greyText"><i className="fas fa-envelope-open"></i> azeemforall4406148@gmail.com</div>
          <div className="flex items-center justify-center space-x-4">
            <i className="text-2xl transform transition-all duration-300 hover:scale-110 hover:text-secondary cursor-pointer text-greyText fab fa-facebook"></i>
            <i className="text-2xl transform transition-all duration-300 hover:scale-110 hover:text-secondary cursor-pointer text-greyText fab fa-twitter"></i>
            <i className="text-2xl transform transition-all duration-300 hover:scale-110 hover:text-secondary cursor-pointer text-greyText fab fa-linkedin"></i>
            <i className="text-2xl transform transition-all duration-300 hover:scale-110 hover:text-secondary cursor-pointer text-greyText fab fa-github"></i>
          </div>
      </div>
        </div>
      </div>
      <div style={{ height: "20%" }} className="footer-bottom-part text-sm mt-4  bg-primary flex items-center justify-center">
        <p className="p-4 text-xs font-semibold text-greyText">&copy; Copyright 2021 AzeemSubhani</p>
      </div>
    </div>
  );
};

export default Footer;
