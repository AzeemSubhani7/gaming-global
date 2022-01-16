// Libraries
import React, { useState, useEffect, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import { connect } from "react-redux";
import Moment from "react-moment";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import LinearImageSection from "../components/LinearImageSection/LinearImageSection";
import image from "../images/glaz_sniper.jpg";

// Utils
import {
  paragraphClasses,
  linearImageHeadingClasses,
} from "../utils/combinedClasses";
import {
  defaultButtonStyles,
  secondaryButtonStyles,
} from "../components/Button/Button";
import { baseUrl } from "../utils/backendUrl";

const ScrimPage = ({ user }) => {
  const [isNotAbleToSubmit, setIsNotAbleToSubmit] = useState(true);

  const [scrimTitle, setScrimTitle] = useState("");
  const [scrimText, setScrimText] = useState("");
  const [scrimGame, setScrimGame] = useState("");

  const [scrims, setScrims] = useState("");
  const [backup, setBackup] = useState("")

  const [change, setChange] = useState(true);
  const [error, setError] = useState(false);
  const [scrimCreated, setScrimCreated] = useState(false);
  const [scrimDeleted, setScrimDeleted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const closeErrorModal = () => setError(false);
  const closeScrimCreatedModal = () => setScrimCreated(false);
  const closeScrimDeleteModal = () => setScrimDeleted(false);

  // Function for creating the scrim
  const createScrim = async (title, text, game, userId) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/scrim/create/${userId}`,
        {
          title: title,
          text: text,
          game: game,
        }
      );
      if (response.data) {
        setError(false);
        setScrimCreated(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  // Handling the click for the creating Scrim
  const handleClick = () => {
    setIsOpen(false);
    createScrim(scrimTitle, scrimText, scrimGame, user._id);
  };

  const deleteScrim = async (id) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/rmascrim/${id}`);
      if (response.data) {
        setScrimDeleted(true);
      }
    } catch (error) {
      setError(true);
      alert(error);
    }
  };

  const acceptChallenge = async (scrimId) => {
    try {
      const response = await axios.patch(
        `api/scrims/${scrimId}/accept/${user._id}`
      );
      if (response.data) {
        alert("You have accepted the challenge!");
        setChange((change) => !change);
      }
    } catch (error) {
      setError(true);
      alert(error);
    }
  };

  // Use-Effect for validating
  useEffect(() => {
    if (scrimTitle && scrimText && scrimGame) {
      setIsNotAbleToSubmit(false);
    } else {
      setIsNotAbleToSubmit(true);
    }
  }, [scrimTitle, scrimText, scrimGame]);

  const listAccepted =  () => {
    const list = backup.filter((item) => {
      if (item.going) {
        return item;
      }
      else {
        return 
      }
    });
    console.log(list);
    setScrims(list);
  };

  const fullList = () => {
    setScrims(backup);
  }

  const listNotAccepted = () => {
    const list = backup.filter((item) => {
      if (!item.going) {
        return item;
      }
    });
    console.log(list);
    setScrims(list);
  };

  useEffect(() => {
    const fetchScrims = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/scrims/getall`);
        if (response.data) {
          setScrims(response.data);
          setBackup(response.data);
          // filteringChallenged();
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetchScrims();
  }, [scrimCreated, error, scrimDeleted, change]);

  // console.log(user);
  // console.log(scrims);
  // console.log(challenged);

  return (
    <div className="Scrim Page">
      <Header />
      <LinearImageSection imageUrl={image}>
        <div className="flex items-start justify-center flex-col">
          <h1 className={linearImageHeadingClasses}>Scrims</h1>
          <p className={paragraphClasses}>
            You can create Scrims and let other people challenge you.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className={`${secondaryButtonStyles} mt-5`}
          >
            Create A Scrim
          </button>
        </div>
      </LinearImageSection>

      {/* Seconds Section */}

      <div className="flex justify-evenly my-4">
        <p
          onClick={() => {
              fullList()
          }}
          className="text-greyText text-lg bg-primary-light p-5 rounded-xl cursor-pointer hover:text-secondary "
        >
          All
        </p>
        <p
          onClick={() => listNotAccepted()}
          className="text-greyText text-lg cursor-pointer bg-primary-light p-5 rounded-xl hover:text-secondary "
        >
          Unchallenged
        </p>
        <p
          onClick={() => listAccepted()}
          className="text-greyText text-lg cursor-pointer bg-primary-light p-5 rounded-xl hover:text-secondary "
        >
          Challenged
        </p>
      </div>

      {/* ------- Main Content For the to Display --------- */}

      <div className="cards for main content flex justify-evenly flex-wrap">
        
      {scrims.length > 0 ? (
        scrims.map((x) => {
          return (
            <div className="max-w-md py-4 px-8 bg-primary-light relative shadow-lg rounded-lg my-20">
              {user._id === x.user._id ? (
                <p
                  className="text-center"
                  style={{
                    position: "absolute",
                    zIndex: "10",
                    top: "5px",
                    left: "5px",
                  }}
                >
                  <XCircleIcon
                    onClick={() => {
                      deleteScrim(x._id);
                    }}
                    style={{ top: "5px", left: "5px", zIndex: 10 }}
                    className="h-5 w-5 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
                  />
                </p>
              ) : null}
              <div className="flex justify-center md:justify-end -mt-16">
              </div>
              <div>
                <h2 className="text-greyText text-3xl font-semibold">
                  {x.scrimTitle}
                </h2>
                <p className="my-4 text-greyText text-base">
                  For: <span className="text-secondary">{x.game}</span>
                </p>
                <p className="my-2 text-greyText text-xs">
                  <Moment date={x.createdAt} format="LLLL" />
                </p>
                <p className=" text-greyText text-lg mt-6 mb-6">
                  {x.scrimText}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-end mt-4">
                  <p className="text-base font-medium text-secondary">
                    {x.going ? (
                      <p className="text-base font-medium text-greyText">
                        Accepted by: <span className="text-lg text-secondary">{x.going.userName}</span>
                      </p>
                    ) : user._id === x.user._id ? null : (
                      <button
                        onClick={() => acceptChallenge(x._id)}
                        className={`${defaultButtonStyles} mx-4`}
                      >
                        Accept it
                      </button>
                    )}
                  </p>
                </div>
                <div className="flex justify-start ml-3 mt-4">
                  <p className="text-base font-medium text-greyText">
                    Posted by:{" "}
                    <span className="text-lg text-secondary">
                      {x.user.userName}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-center my-4 text-white text-xl">No Scrims</div>
      )}    
      
      </div>

      {/* ------- Main Content End     --------- */}

      {/* JSX FOR OPENING A MODAL FOR SUCCESS */}
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
          <div className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5">
            <Dialog.Title className="text-xl mb-3 font-semibold text-center text-greyText">
              Create A <span className="text-secondary">Scrim</span>
              <p className="text-base font-normal text-greyText">
                Let other challenge you!
              </p>
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              <div className="my-4 space-y-3 flex flex-col item-end">
                <div className="flex items-center justify-center space-x-3">
                  <label>Scrim Title</label>
                  <input
                    value={scrimTitle}
                    onChange={(event) => setScrimTitle(event.target.value)}
                    className="bg-inputBg rounded-3xl outline-none p-2 placeholder-greyPlaceholder text-greyText text-sm"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <label>Scrim Text</label>
                  <input
                    value={scrimText}
                    onChange={(event) => setScrimText(event.target.value)}
                    className="bg-inputBg rounded-3xl outline-none p-2 placeholder-greyPlaceholder text-greyText text-sm"
                  />
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <label>Game for</label>
                  <input
                    value={scrimGame}
                    onChange={(event) => setScrimGame(event.target.value)}
                    className="bg-inputBg rounded-3xl outline-none p-2 placeholder-greyPlaceholder text-greyText text-sm"
                  />
                </div>
              </div>
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
                  setIsOpen(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              disabled={isNotAbleToSubmit}
              className={`${secondaryButtonStyles} mt-3`}
              onClick={handleClick}
            >
              Create A Scrim
            </button>
          </div>
        </Dialog>
      </Transition>

      {/* JSX FOR OPENING A MODAL FOR ERROR */}
      <Transition
        show={error}
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
          open={error}
          onClose={closeErrorModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5">
            <Dialog.Title className="text-xl mb-3 font-semibold text-center text-greyText">
              Internal Server Error!
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              There is some Error Occurred By the Server Please Try Again Late
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
                  setError(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setError(false);
              }}
            >
              Go Back
            </button>
          </div>
        </Dialog>
      </Transition>

      {/* JSX FOR OPENING A MODAL FOR Scrim Created */}
      <Transition
        show={scrimCreated}
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
          open={scrimCreated}
          onClose={closeScrimCreatedModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5">
            <Dialog.Title className="text-xl mb-3 font-semibold text-center text-greyText">
              Success
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              Scrim Has been created
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
                  setScrimCreated(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setScrimCreated(false);
              }}
            >
              Go Back
            </button>
          </div>
        </Dialog>
      </Transition>

      {/* JSX FOR OPENING A MODAL FOR Scrim deleted */}
      <Transition
        show={scrimDeleted}
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
          open={scrimDeleted}
          onClose={closeScrimDeleteModal}
          className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
        >
          <Dialog.Overlay className="bg-green-400" />
          <div className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5">
            <Dialog.Title className="text-xl mb-3 font-semibold text-center text-greyText">
              Success
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              Scrim Has been deleted!
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
                  setScrimDeleted(false);
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setScrimDeleted(false);
              }}
            >
              Go Back
            </button>
          </div>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

export default connect(mapStateToProps)(ScrimPage);
