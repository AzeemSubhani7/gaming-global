// Libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  UserIcon,
  TableIcon,
  InboxIcon,
  AnnotationIcon,
  LogoutIcon
} from "@heroicons/react/outline";

// Actions
import { clearLoggedUser } from "../redux/action";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Images
import socialMediaImage from "../images/social_media_home_page.jpeg";

// Utils
import { secondaryButtonStyles } from "../components/Button/Button";

const transperentDivCSS = {
  boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .3)",
  filter: "blur(10px)",
  height: "120%",
  width: "120%",
  position: "absolute",
  zIndex: "10",
  borderRadius: "12px",
};

const SocialPage = ({ history, user, clearLoggedUser }) => {
  // console.log(history);
  // console.log(user);
  // console.log(clearLoggedUser)

  useEffect(() => {
    if(!user) {
      history.push("/signup")
    }
  })

  if (user) {
    if (user.isBanned) {
      return (
        <div className="flex items-center justify-center">
          <div className="mt-10 w-auto">
            <h1 className=" text-center mx-10  mt-5 md:mt-16 font-bold text-2xl md:text-3xl lg:text-5xl text-gray-200">
              GamingGlobal Has Banned you <br />
              from the application.
            </h1>
            <div
              className="sensCard bg-primary-light my-10 mx-16 text-sm text-center md:text-base p-4 md:p-10 text-greyText lg:mx-80 rounded-xl"
              style={{ height: "40%" }}
            >
              <p>
                You are banned because you didn't follow the community rules and guidelines.
              </p>
              <Link to="/">
                <button
                  className={`my-5 md:mb-0 md:mt-10 ${secondaryButtonStyles}`}
                >
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }

  

  const logoutUser = () => {
    // console.log("User is about to logged out")
    clearLoggedUser()
    history.push('/signup')
  }
  
    return (
      <div className="social-media">
      <Header />
      <LinearImageSection imageUrl={socialMediaImage}>
        <div className="flex overflow-hidden p-10 rounded-xl flex-col items-center justify-center relative z-0">
          <div className="" style={transperentDivCSS}></div>
          <h1 className="px-10 text-gray-200 text-center md:text-left sm:px-0 font-bold lg:font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
            {" "}
            Hi,{" "}
            <span className="text-secondary">
              {" "}
              {user ? user.userName : null}{" "}
            </span>{" "}
            <br></br>
              <span className='text-3xl font-semibold mt-10'>
            Welcome to GamingGlobal
              </span>
          </h1>
        </div>
      </LinearImageSection>
      
      <div className="text-white  mt-10">
        <p className="text-2xl text-center mt-5 md:mt-10 text-secondary">
          Social Navigator
        </p>
      </div>
      {/* Header for navigation*/}
      <div className="social-header p-5">
        <div className="bg-primary-light flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-evenly  text-gray-200 font-semibold text-md py-10 rounded-xl">
          <Link
            to="/profile/me"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <UserIcon className="w-6 h-6 mr-2" /> Profile
          </Link>
          <Link
            to="/profile/me"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <TableIcon className="w-6 h-6 mr-2" /> Feed
          </Link>
          <Link
            to="/profile/me"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <InboxIcon className="w-6 h-6 mr-2" /> Chat
          </Link>
          <Link
            to="/profile/me"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <AnnotationIcon className="w-6 h-6 mr-2" /> Notification
          </Link>

          <div
            onClick={logoutUser}
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <LogoutIcon className="w-6 h-6 mr-2" /> Logout
          </div>
        </div>
      </div>
      <Footer />
    </div>
    )
  
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state.userState.user)
  if (state.userState) {
    return { user: state.userState.user };
  } else {
    ownProps.history.push("/signup");
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearLoggedUser: () => dispatch(clearLoggedUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SocialPage);
