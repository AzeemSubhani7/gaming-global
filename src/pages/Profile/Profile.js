// Libraries
import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {
  defaultButtonStyles,
  secondaryButtonStyles,
} from "../../components/Button/Button";
import { XCircleIcon } from "@heroicons/react/outline";
import { Transition, Dialog } from "@headlessui/react";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Icons
import { PencilIcon } from "@heroicons/react/outline";

// Actions
import { clearLoggedUser } from "../../redux/action";

// Utilities
import { baseUrl } from "../../utils/backendUrl";

const ProfilePage = ({ user, history, match, clearLoggedUser }) => {
  // console.log(user)
  // console.log(history)
  // console.log(match)

  // console.log(match.params.id)

  // States for the profile-page
  const [fetchedUser, setFetchedUser] = useState(null);
  const [fetchedUserProfileInfo, setFetchedUserProfileInfo] = useState(null);
  const [fetchingLoading, setFetchingLoading] = useState(null);

  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);

  const [postFetchingLoading, setPostFetchingLoading] = useState(null);
  const [isOpenFollower, setIsOpenFollower] = useState(false);
  const [isOpenFollowing, setIsOpenFollowing] = useState(false);
  const [error, setError] = useState(null);
  const [followFlag, setFollowFlag] = useState("Follow");

  const closeFollowModal = () => setIsOpenFollower(false);
  const closeFollowingModal = () => setIsOpenFollowing(false);

  const followOrUnfollow = () => {
    fetch(`${baseUrl}/api/user/follow/${match.params.id}`, {
      headers: { Authorization: user.token },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "unfollowed") setFollowFlag("Follow");
        if (data.message === "followed") setFollowFlag("Unfollow");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // useEffect to fetch the user for initial render
  useEffect(() => {
    // Fetching User's Profile's information

    const fetchUserProfileInfo = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/${match.params.id}`, {
          headers: { Authorization: user.token },
        });
        if (response.data) {
          setFetchedUserProfileInfo(response.data);
          if (response.data) {
            const isFollowing = response.data.followStats[0].followers.filter( (x) => {
              return x.user._id == user._id
            });
            console.log('from following')
            console.log(isFollowing)
            if(isFollowing.length > 0) {
              setFollowFlag('Unfollow');
            }
            else {
              setFollowFlag('Follow');
            }
          }
          setFetchingLoading(false);
        }
      } catch (error) {
        setError(error);
        console.log(error);
      }
    };

    // Fetching the user Details
    const fetchUser = async () => {
      setFetchingLoading(true);
      try {
        const response = await axios.get(
          `${baseUrl}/api/user/${match.params.id}`,
          {
            headers: { Authorization: user.token },
          }
        );
        if (response.data) {
          setFetchedUser(response.data);
          setFetchingLoading(false);
        }
      } catch (e) {
        setFetchingLoading(false);
        console.log(e);
        setError(e);
      }
    };
    fetchUserProfileInfo();
    fetchUser();
  }, [followFlag]);


  const handleBannedUser = () => {
    clearLoggedUser();
    history.push("/");
  };

  const handleFetchedBannedUser = () => {
    history.goBack();
  };

  const handleError = () => {
    history.push("/");
  };

  // If fetching is in process
  if (fetchingLoading) {
    return (
      <div>
        <Header />
        <div className="my-10 flex items-center justify-center">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader
                visible
                style={{ margin: "auto" }}
                type="MutatingDots"
                secondaryColor="#d31c3e"
                color="#D31C3E"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // If logged-in user is Banned
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
  // If fetched user is Banned
  if (fetchedUser) {
    if (fetchedUser.isBanned) {
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
                  {fetchedUser.userName}
                </span>{" "}
                <br />
                from the application.
              </h1>
              <div
                className="sensCard bg-primary-light my-10 mx-16 text-sm text-center md:text-base p-4 md:p-10 text-greyText lg:mx-80 rounded-xl"
                style={{ height: "40%" }}
              >
                <p>
                  He is banned because he didn't follow the community rules and
                  guidelines.
                </p>
                <div>
                  <button
                    onClick={() => handleFetchedBannedUser()}
                    className={`my-5 md:mb-0 md:mt-10 ${secondaryButtonStyles}`}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      );
    }
  }

  // If Some Error Happends
  if (error) {
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
              There is Some{" "}
              <span className="text-secondary font-extrabold">Nasty Error</span>{" "}
              <br />
              occured, Please try again Later!
            </h1>
            <div
              className="sensCard bg-primary-light my-10 mx-16 text-sm text-center md:text-base p-4 md:p-10 text-greyText lg:mx-80 rounded-xl"
              style={{ height: "40%" }}
            >
              <p>Something really bad happened.</p>
              <div>
                <button
                  onClick={() => handleError()}
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

  // If Fetching is failed or in process
  if (!fetchedUser) {
    return (
      <div>
        <div>
          <Header />
          <div className="my-10 flex items-center justify-center">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Loader
                  visible
                  style={{ margin: "auto" }}
                  type="MutatingDots"
                  secondaryColor="#d31c3e"
                  color="#D31C3E"
                  height={100}
                  width={100}
                />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }

  // console.log(fetchedUserProfileInfo);
  // User logged-in is Visiting his own profile
  if (fetchedUser._id === user._id) {
    return (
      <div className="profile-page">
        <Header />
        <div className="profile-page-container">
          {/*First Section*/}
          <div className="bg-primary-light overflow-hidden m-5 rounded-xl p-5 flex items-center flex-col relative">
            <PencilIcon
              onClick={() => {
                console.log("Edit this profile");
              }}
              style={{ top: "10px", right: "20px" }}
              className="h-6 w-6 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
            />
            <div
              className="absolute text-sm text-greyText"
              style={{ top: "40px", right: "20px" }}
            >
              Edit
            </div>

            <div className="bg-primary-dark lg:h-64 lg:w-64 h-44 w-44 overflow-hidden relative border-greyText border-4 rounded-full">
              <img
                src={
                  fetchedUser
                    ? fetchedUser.userAvatar
                      ? fetchedUser.userAvatar
                      : "https://picsum.photos/200/300?grayscale"
                    : null
                }
                className="absolute lg:h-64 lg:w-64 h-44 w-44"
                alt="profile of a user"
              />
            </div>

            <div className="text-center font-medium text-3xl mt-3 text-greyText">
              {fetchedUser.userName}
            </div>
            {/*A bit of logic in future*/}
            <div className="my-2 flex space-x-4">
              {/*<button className={defaultButtonStyles}>Follow</button>
          <button className={secondaryButtonStyles}>Whisper</button>*/}
            </div>

            <div className="bg-primary-light md:bg-primary-dark flex items-center justify-evenly mt-3 px-10 py-2 rounded-xl">
              <div className="m-3 divide-y-2 divide-greyText flex flex-col space-y-4 items-center">
                <p
                  onClick={() => setIsOpenFollower(true)}
                  className="font-medium cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300 text-xl text-greyText"
                >
                  Followers
                </p>

                <p className=" font-medium  text-xl text-greyText">
                  {fetchedUserProfileInfo
                    ? fetchedUserProfileInfo.followStats[0].followers.length
                    : "fetching"}
                </p>
              </div>
              <div className="m-3 divide-y-2 divide-greyText flex flex-col space-y-4 items-center">
                <p
                  onClick={() => setIsOpenFollowing(true)}
                  className="font-medium cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300 text-xl text-greyText"
                >
                  Following
                </p>
                <p className=" font-medium text-xl text-greyText">
                  {fetchedUserProfileInfo
                    ? fetchedUserProfileInfo.followStats[0].following.length
                    : "fetching"}
                </p>
              </div>
            </div>
          </div>
          {/*Second Section*/}
        </div>
        {/* Modals for openning followers*/}

        <Transition
          show={isOpenFollower}
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
            open={isOpenFollower}
            onClose={closeFollowModal}
            className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
          >
            <Dialog.Overlay className="bg-green-400" />
            <div
              className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
              style={{ width: "300px" }}
            >
              <Dialog.Title className="text-xl mb-3 text-center text-greyText">
                {"Followers"}
              </Dialog.Title>

              <Dialog.Description className="text-center text-greyText p-5">
                {fetchedUserProfileInfo
                  ? fetchedUserProfileInfo.followStats[0].followers.length < 1
                    ? `No followers`
                    : fetchedUserProfileInfo.followStats[0].followers.map(
                        (x) => {
                          return <div key={x._id}>{x.user.userName}</div>;
                        }
                      )
                  : "fetching"}
              </Dialog.Description>

              <p
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
                    setIsOpenFollower(false);
                  }}
                  style={{ top: "10px", right: "10px" }}
                  className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
                />
              </p>

              <button
                className={`${secondaryButtonStyles} mt-3`}
                onClick={() => {
                  setIsOpenFollower(false);
                }}
              >
                OKAY
              </button>
            </div>
          </Dialog>
        </Transition>
        {/* Modals for openning followers*/}

        {/* Modals for openning following*/}

        <Transition
          show={isOpenFollowing}
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
            open={isOpenFollowing}
            onClose={closeFollowingModal}
            className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
          >
            <Dialog.Overlay className="bg-green-400" />
            <div
              className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
              style={{ width: "300px" }}
            >
              <Dialog.Title className="text-xl mb-3 text-center text-greyText">
                {"Following"}
              </Dialog.Title>

              <Dialog.Description className="text-center text-greyText p-5">
                {fetchedUserProfileInfo
                  ? fetchedUserProfileInfo.followStats[0].following.length < 1
                    ? `No followers`
                    : fetchedUserProfileInfo.followStats[0].following.map(
                        (x) => {
                          return <div key={x._id}>{x.user.userName}</div>;
                        }
                      )
                  : "fetching"}
              </Dialog.Description>

              <p
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
                    setIsOpenFollowing(false);
                  }}
                  style={{ top: "10px", right: "10px" }}
                  className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
                />
              </p>

              <button
                className={`${secondaryButtonStyles} mt-3`}
                onClick={() => {
                  setIsOpenFollowing(false);
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
  }

  // If Logged-In user is visiting someone else's Profile
  return (
    <div className="profile-page">
      <Header />
      <div className="profile-page-container">
        {/*First Section*/}
        <div className="bg-primary-light overflow-hidden m-5 rounded-xl p-5 flex items-center flex-col relative">
          <div className="bg-primary-dark lg:h-64 lg:w-64 h-44 w-44 overflow-hidden relative border-greyText border-4 rounded-full">
            <img
              src={
                fetchedUser
                  ? fetchedUser.userAvatar
                    ? fetchedUser.userAvatar
                    : "https://picsum.photos/200/300?grayscale"
                  : null
              }
              className="absolute lg:h-64 lg:w-64 h-44 w-44"
              alt="profile of a user"
            />
          </div>

          <div className="text-center font-medium text-3xl mt-3 text-greyText">
            {fetchedUser.userName}
          </div>
          {/*A bit of logic in future*/}
          <div className="my-2 flex space-x-4">
            <button
              onClick={() => followOrUnfollow()}
              className={defaultButtonStyles}
            >
              {followFlag}
            </button>
            <button className={secondaryButtonStyles}>Whisper</button>
          </div>

          <div className="bg-primary-light md:bg-primary-dark flex items-center justify-evenly mt-3 px-10 py-2 rounded-xl">
            <div className="m-3 cursor-pointer divide-y-2 divide-greyText flex flex-col space-y-4 items-center">
              <p
                onClick={() => setIsOpenFollower(true)}
                className="font-medium text-xl cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300 text-greyText"
              >
                Followers
              </p>

              <p className=" font-medium text-xl text-greyText">
                {fetchedUserProfileInfo
                  ? fetchedUserProfileInfo.followStats[0].followers.length
                  : "fetching"}
              </p>
            </div>
            <div className="m-3 divide-y-2 divide-greyText flex flex-col space-y-4 items-center">
              <p
                onClick={() => setIsOpenFollowing(true)}
                className="font-medium cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300 text-xl text-greyText"
              >
                Following
              </p>
              <p className=" font-medium  text-xl text-greyText">
                {fetchedUserProfileInfo
                  ? fetchedUserProfileInfo.followStats[0].following.length
                  : "fetching"}
              </p>
            </div>
          </div>
        </div>
        {/*Second Section*/}
      </div>

      {/* Modals for openning followers*/}

      <Transition
        show={isOpenFollower}
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
          open={isOpenFollower}
          onClose={closeFollowModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div
            className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
            style={{ width: "300px" }}
          >
            <Dialog.Title className="text-xl mb-3 text-center text-greyText">
              {"Followers"}
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              {fetchedUserProfileInfo
                ? fetchedUserProfileInfo.followStats[0].followers.length < 1
                  ? `No followers`
                  : fetchedUserProfileInfo.followStats[0].followers.map((x) => {
                      return <div key={x._id}>{x.user.userName}</div>;
                    })
                : "fetching"}
            </Dialog.Description>

            <p
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
                  setIsOpenFollower(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setIsOpenFollower(false);
              }}
            >
              OKAY
            </button>
          </div>
        </Dialog>
      </Transition>
      {/* Modals for openning followers*/}

      {/* Modals for openning following*/}

      <Transition
        show={isOpenFollowing}
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
          open={isOpenFollowing}
          onClose={closeFollowingModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div
            className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
            style={{ width: "300px" }}
          >
            <Dialog.Title className="text-xl mb-3 text-center text-greyText">
              {"Following"}
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              {fetchedUserProfileInfo
                ? fetchedUserProfileInfo.followStats[0].following.length < 1
                  ? `No followers`
                  : fetchedUserProfileInfo.followStats[0].following.map((x) => {
                      return <div key={x._id}>{x.user.userName}</div>;
                    })
                : "fetching"}
            </Dialog.Description>

            <p
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
                  setIsOpenFollowing(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setIsOpenFollowing(false);
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
const mapStateToProps = (state) => {
  // console.log(state.userState.user)
  if (state.userState) {
    return { user: state.userState.user };
  } else {
    return { user: null };
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearLoggedUser: () => dispatch(clearLoggedUser()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
