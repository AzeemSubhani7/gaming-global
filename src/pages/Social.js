// Libraries
import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  UserIcon,
  TableIcon,
  InboxIcon,
  AnnotationIcon,
  LogoutIcon,
  PresentationChartBarIcon,
  XCircleIcon,
  SparklesIcon
} from "@heroicons/react/outline";

import { Transition, Dialog } from "@headlessui/react";

// Actions
import { clearLoggedUser } from "../redux/action";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";

// Images
import newSocialImage from "../images/devastating_man.jpg";

// Utils
import { secondaryButtonStyles } from "../components/Button/Button";
import axios from "axios";
import { baseUrl } from "../utils/backendUrl";

const transperentDivCSS = {
  boxShadow: "inset 0 0 2000px rgba(255, 255, 255, .3)",
  filter: "blur(10px)",
  background: "rgba(255, 255, 255, 0.1)",
  height: "120%",
  width: "120%",
  position: "absolute",
  zIndex: "10",
  borderRadius: "12px",
};

const SocialPage = ({ history, user, clearLoggedUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    if (!user) {
      history.push("/signup");
    }
  });

  // useEffect for fetching the notifications xD
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/notifications`, {
          headers: { Authorization: user.token },
        });
        if (response) {
          // console.log(response.data);
          // console.log(response.data[0].notifications)
          setNotifications(response.data[0].notifications);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotifications();
  }, [user.token]);

  const handleBannedUser = () => {
    clearLoggedUser();
    history.push("/");
  };

  if (user) {
    if (user.isBanned) {
      return (
        <Transition
          show
          as={Fragment}
          enter="transition-all ease-in-out duration-700 transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="translate-y-0 opacity-100"
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div className="flex items-center justify-center">
            <div className="mt-10 w-auto">
              <h1 className=" text-center mx-10  mt-5 md:mt-16 font-bold text-2xl md:text-3xl lg:text-5xl text-gray-200">
                GamingGlobal Has Banned{" "}
                <span className="text-secondary font-extrabold">
                  {user.userName}
                </span>{" "}
                <br />
                from the application.
              </h1>
              <div
                className="sensCard bg-primary-light my-10 mx-16 text-sm text-center md:text-base p-4 md:p-10 text-greyText lg:mx-80 rounded-xl"
                style={{ height: "40%" }}
              >
                <p>
                  You are banned because you didn't follow the community rules
                  and guidelines.
                </p>
                <div>
                  <button
                    onClick={() => handleBannedUser()}
                    className={`my-5 md:mb-0 md:mt-10 ${secondaryButtonStyles}`}
                  >
                    Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      );
    }
  }

  const logoutUser = () => {
    // console.log("User is about to logged out")
    clearLoggedUser();
    history.push("/login");
  };

  return (
    <div className="social-media">
      <Header />
      <LinearImageSection imageUrl={newSocialImage}>
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
            <span className="text-3xl font-semibold mt-10">
              Welcome to GamingGlobal
            </span>
          </h1>
        </div>
      </LinearImageSection>

      <div className="text-white  mt-10">
        <p className="text-3xl font-semibold text-center mt-5 md:mt-10 text-secondary">
          Social Navigator
        </p>
      </div>
      {/* Header for navigation*/}
      <div className="social-header p-5">
        <div className="bg-primary-light flex flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-evenly  text-gray-200 font-semibold text-md py-10 rounded-xl">
          <Link
            to={`/profile/user/${user ? user._id : null}`}
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <UserIcon className="w-6 h-6 mr-2" /> Profile
          </Link>
          <Link
            to="/profile/feed"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <TableIcon className="w-6 h-6 mr-2" /> Feed
          </Link>
          <Link
            to="/scrims"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <SparklesIcon className="w-6 h-6 mr-2" /> Scrims
          </Link>
          {user.role === "root" ? (
            <Link
              to="/dashboard"
              className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <PresentationChartBarIcon className="w-6 h-6 mr-2" /> Dashboard
            </Link>
          ) : null}
          <Link
            to="/chat/default"
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <InboxIcon className="w-6 h-6 mr-2" /> Chat
          </Link>
          <div
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <AnnotationIcon className="w-6 h-6 mr-2" /> Notification
          </div>

          <div
            onClick={logoutUser}
            className="flex items-center justify-evenly hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <LogoutIcon className="w-6 h-6 mr-2" /> Logout
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition-all ease-in-out duration-700 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="translate-y-0 opacity-100"
        leave="transition-all ease-in-out duration-700 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <Dialog
          as="div"
          open={isOpen}
          onClose={closeModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div
            className="bg-primary-light rounded-xl  flex flex-col justify-center items-center p-5"
            style={{ width: "600px" }}
          >
            <Dialog.Title className="text-2xl mb-3 text-center text-greyText">
              Notifications of{" "}
              <span className="text-secondary">{user.userName}</span>
            </Dialog.Title>

            <div className="notification renderer flex items-center justify-center space-y-2 flex-col p-4 ">
              {notifications.length > 0 ? (
                notifications.map((x) => {
                  return (
                    <div
                      key={x._id}
                      className="p-4 text-greyText bg-primary-dark mt-2 rounded-lg"
                    >
                      {x.type === "newfollower" ? (
                        <div>
                          {" "}
                          <span
                            onClick={() =>
                              history.push(`/profile/user/${x.user._id}`)
                            }
                            className="text-secondary font-semibold  hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
                          >
                            {" "}
                            {x.user.userName}{" "}
                          </span>{" "}
                          Has started Following you!{" "}
                        </div>
                      ) : null}
                      {x.type === "newlike" ? (
                        <div>
                          {" "}
                          <span
                            onClick={() =>
                              history.push(`/profile/user/${x.user._id}`)
                            }
                            className="text-secondary font-semibold  hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
                          >
                            {" "}
                            {x.user.userName}{" "}
                          </span>{" "}
                          Has Like your{" "}
                          <span
                            onClick={() => history.push(`/posts/${x.post._id}`)}
                            className="text-secondary font-semibold  hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
                          >
                            Post
                          </span>
                          .{" "}
                        </div>
                      ) : null}
                      {x.type === "newcomment" ? (
                        <div>
                          {" "}
                          <span
                            onClick={() =>
                              history.push(`/profile/user/${x.user._id}`)
                            }
                            className="text-secondary font-semibold  hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
                          >
                            {" "}
                            {x.user.userName}{" "}
                          </span>{" "}
                          Has Comment on your{" "}
                          <span
                            onClick={() => history.push(`/posts/${x.post._id}`)}
                            className="text-secondary font-semibold  hover:text-secondary cursor-pointer transform transition-all duration-300 hover:scale-105"
                          >
                            Post
                          </span>
                          .{" "}
                        </div>
                      ) : null}
                    </div>
                  );
                })
              ) : (
                <div className="text-xl text-greyText text-center">No Notifications</div>
              )}

              {/*<div className='notification bg-green-300 p-2'>
                  XDXDXDXd
              </div>
              <div className='notification bg-green-300 p-2'>
                  XDXDXDXd
              </div>
              <div className='notification bg-green-300 p-2'>
                  XDXDXDXd
           </div>*/}
            </div>
            {/*<Dialog.Description className="text-center text-greyText p-5">
              "Fetching the details"
          </Dialog.Description>*/}

            <div
              className="text-center"
              style={{
                position: "absolute",
                zIndex: "200",
                top: "20px",
                right: "20px",
              }}
            >
              <XCircleIcon
                onClick={() => {
                  setIsOpen(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </div>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              OKAY
            </button>
          </div>
        </Dialog>
      </Transition>
      {/* Modals for openning followers and following*/}
      <Footer />
    </div>
  );
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
    clearLoggedUser: () => dispatch(clearLoggedUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialPage);
