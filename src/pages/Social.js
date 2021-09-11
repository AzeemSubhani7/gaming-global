// Libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { UserIcon, TableIcon, InboxIcon, AnnotationIcon } from "@heroicons/react/outline"

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Images
import socialMediaImage from "../images/social_media_home_page.jpeg";

// Utils
import { defaultButtonStyles } from "../components/Button/Button";

const SocialPage = ({ history, user }) => {

  console.log(history);
  console.log(user);
  
  return (
    <div className="social-media">
      <Header />
      <LinearImageSection imageUrl={socialMediaImage}>
        <div className="flex flex-col items-center justify-center">
          <h1 className="px-10 text-gray-200 text-center md:text-left sm:px-0 font-bold lg:font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            {" "}
            Hi, <span className='text-secondary'> {user.userName} </span> <br></br>
            Welcome to <br></br> GamingGlobal
          </h1>
        </div>
      </LinearImageSection>
      <div className='text-white  mt-10'>
        <p className="text-2xl text-center mt-5 md:mt-10 text-gray-200">
          Social Navigator
        </p>
      </div>
      {/* Header for navigation*/}
      <div className='social-header p-5'>
        <div className="bg-primary-light flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-evenly  text-gray-200 font-semibold text-md py-10 rounded-xl">
          <Link to='/profile/me' className='flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105'>
            <UserIcon className='w-6 h-6 mr-2' />  Profile
          </Link>
          <Link to='/profile/me' className='flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105'>
            <TableIcon className='w-6 h-6 mr-2' />  Feed
          </Link>
          <Link to='/profile/me' className='flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105'>
            <InboxIcon className='w-6 h-6 mr-2' />  Chat
          </Link>
          <Link to='/profile/me' className='flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105'>
            <AnnotationIcon className='w-6 h-6 mr-2' />  Notification
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state.userState.user)
  if(state.userState) {
    return { user: state.userState.user }
  }
  else {
    ownProps.history.push('/signup')
  };
};

export default connect(mapStateToProps)(SocialPage);
