// Libraries
import React, { Fragment, useEffect, useState } from "react";
import { Transition, Dialog } from "@headlessui/react";
import validator from "validator";
import axios from "axios";
import { connect } from "react-redux";
import { loginUser } from "../redux/action";
import { XCircleIcon } from "@heroicons/react/outline";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// Images
import SignUpBackgroundImage from "../images/signUp_BG_optimized.jpg";
import { secondaryButtonStyles } from "../components/Button/Button";
import { baseUrl } from "../utils/backendUrl";

// Linear Background Styles
const linearBackgroundStyle = {
  background:
    "linear-gradient(0deg, rgba(31, 29, 41, 1) 1%, rgba(255, 255, 255, 0) 49%, rgba(31, 29, 41, 1) 95%)",
  height: "90vh",
  width: "100%",
  position: "absolute",
  top: "-16px",
  left: "0px",
};

const LoginPage = ({ user, history, loginUser }) => {
  // console.log(user)
  // console.log(history)
  // console.log(loginUser)
  const [isError, setIsError] = useState(false);
  const [isNotAbleToSubmit, setIsNotAbleToSubmit] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseTitle, setResponseTitle] = useState(`Checking Credentials`)
  const [responseParagraph, setResponseParagraph] = useState(`We're Trying to log you in.`)
  const [isLoading, setIsLoading] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [resetDisable, setResetDisable] = useState(true)
  // OTP things
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newConfirmPassword, setNewConfirmPassword] = useState('')
  
  // States & functions for Modal
  const [isOpen, setIsOpen] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const [isReset, setIsReset] = useState(false)

  // const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const closeForgot = () => setIsForgot(false);
  const closeReset = () => setIsReset(false)


  // Initial useEffect
  useEffect(() => {
    if (user) {
      history.push("/")
    }
  });

  // UseEffect for data validation
  useEffect(() => {
    setIsError(false);

    const isAbleToSubmit = () => {
      if (!password) {
        setErrorMsg("Password is required!");
        setIsError(true);
        return setIsNotAbleToSubmit(true);
      }
      if (!email) {
        setErrorMsg("Email is required!");
        setIsError(true);
        return setIsNotAbleToSubmit(true);
      }

      if (!validator.isEmail(email)) {
        setErrorMsg("Not A valid Email");
        setIsError(true);
        return setIsNotAbleToSubmit(true);
      }

      if (password.length < 6) {
        setErrorMsg("Password Length Must be 6 characters!");
        setIsError(true);
        return setIsNotAbleToSubmit(true);
      }

      return setIsNotAbleToSubmit(false);
    };
    isAbleToSubmit();
  }, [isError, isNotAbleToSubmit, errorMsg, email, password]);

  useEffect(() => {
    setResetDisable(false)
    if(!otp) {
      setResetDisable(true)
    }
    if(!newPassword && !newConfirmPassword) {
      setResetDisable(true)
    }
    if(newPassword !== newConfirmPassword) {
      setResetDisable(true)
    }
  },[newPassword,newConfirmPassword,otp])

  useEffect(() => {

  })

  // Handle Submite
  const handleSubmit = async () => {
    // console.log("From handle Submit!");
    // console.log(email);
    // console.log(password);

    try {
      setResponseTitle(`Trying to login!`)
      setResponseParagraph(`Please wait for the server response!`)
      setIsLoading(true)
      setIsOpen(true)
      const userToLogIn = { email, password };
      const response = await axios.post(`https://gaming-global-api.herokuapp.com/api/user/login`, userToLogIn)
      // console.log(response)
      if(response.data) {
        setIsLoading(false)
        setResponseTitle('Success!')
        setResponseParagraph('You have been logged in.')
        loginUser(response.data)
      }
      // if()
    } catch (error) {
      setIsLoading(false)
      // console.log("from error");
      setResponseTitle("Unable to Login!")
      setResponseParagraph("Something went wrong with the credentials")
      setIsOpen(true)
      console.log(error);
    }
  };

  const handleOTP = async () => {
    try {
      const dataToSend = {
        email: forgotEmail
      }
      const response = await axios.post(`${baseUrl}/otp`, dataToSend)
      if(response.data) {
        alert("OTP has been send to the email, Check Email!")
      }
    }
    catch(error) {
      console.log(error)
      alert(error)
    }
  }

  const handleResetPassword = async () => {
    try {
      const dataToSend = {
        otp: otp,
        password: newPassword,
        email: forgotEmail
      }

      const response = await axios.post(`${baseUrl}/getnewpassword`, dataToSend)
      if(response.data) {
        alert("Changes has been made")
        setIsReset(false)
        history.push('/login')
      }
    }
    catch(error) {
      console.log(error)
      alert(error)
    }
  }
  return (
    <div className="loginPage">
      <Header />
      <div
        className="flex items-center overflow-hidden space-y-4 flex-col justify-center"
        style={{ height: "90vh", position: "relative" }}
      >
        <div
          className="rounded-xl z-10"
          style={{
            height: "90vh",
            width: "100%",
            backgroundImage: `url(${SignUpBackgroundImage})`,
            filter: "blur(5px)",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        />
        <div className="rounded-xl z-20" style={linearBackgroundStyle} />

        <Transition
          show={isError}
          enter="transition-all ease-in-out duration-700 transform"
          enterFrom="opacity-0 translate-y-full"
          enterTo="translate-y-0 opacity-100"
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-full"
        >
          <div
            className={`border-secondary border-solid border-4 z-50 bg-primary-light flex items-center justify-center p-10 text-secondary font-semibold rounded-xl relative`}
          >
            {errorMsg}
          </div>
        </Transition>

        <div className="z-50 relative bg-primary-light flex-col space-y-4 rounded-xl p-10 flex items-center justify-center">
          <h1 className="text-center font-semibold text-xl sm:text-2xl  text-gray-200">
            Log In
          </h1>

          <input
            name="email"
            className="bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Email"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="false"
          />
          <input
            name="password"
            className="bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            autoComplete="false"
          />

          <button
            disabled={isNotAbleToSubmit}
            onClick={() => handleSubmit()}
            className="disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-2 text-center w-full rounded-2xl hover:scale-110 transform transition-all duration-300 outline-none  shadow-lg"
          >
            Log In
          </button>
          <p 
          onClick={() => setIsForgot(true)}
          className='text-xs text-greyText cursor-pointer'>Forgot Password</p>
        </div>
      </div>

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
          <div
            className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
            style={{ width: "300px" }}
          >
            <Dialog.Title className="text-xl mb-3 text-center text-greyText">
              {responseTitle}
            </Dialog.Title>

            <Dialog.Description className="text-center text-greyText p-5">
              {responseParagraph}
            </Dialog.Description>

            {isLoading ? (
              <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Loader
                  visible={isLoading}
                  style={{ margin: 'auto' }}
                  type="MutatingDots"
                  secondaryColor="#d31c3e"
                  color="#D31C3E"
                  height={100}
                  width={100}
                />
              </div>
            ) : null}

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
                  setIsOpen(false)
                  history.push('/')
                }}
                style={{ top: "10px", right: "10px" }}
                className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            </p>

            <button
              className={`${secondaryButtonStyles} mt-3`}
              onClick={() => {
                setIsOpen(false)
                user ? history.push('/') : history.push('/login')
              }}
            >
              OKAY
            </button>
          </div>
        </Dialog>
      </Transition>
      {/**/}

      {/*Modal for forgot password!*/}
      <Transition
      show={isForgot}
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
        open={isForgot}
        onClose={closeForgot}
        className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
      >
        <Dialog.Overlay className="bg-green-400" />
        <div
          className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
          style={{ width: "300px" }}
        >
          <Dialog.Title className="text-xl mb-3 text-center text-greyText">
            Reset Password!
          </Dialog.Title>

          <Dialog.Description className="text-center text-greyText p-5">
            <p className='text-greyText text-base'>Enter Email</p>
            <input
            name="email"
            className="bg-inputBg mt-2 rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Email"
            type="email"
            onChange={(event) => setForgotEmail(event.target.value)}
            autoComplete="false"
            />
          </Dialog.Description>

          {isLoading ? (
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
              <Loader
                visible={isLoading}
                style={{ margin: 'auto' }}
                type="MutatingDots"
                secondaryColor="#d31c3e"
                color="#D31C3E"
                height={100}
                width={100}
              />
            </div>
          ) : null}

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
                setIsForgot(false)
                // history.push('/')
              }}
              style={{ top: "10px", right: "10px" }}
              className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
            />
          </p>

          <button
            className={`${secondaryButtonStyles} mt-3`}
            onClick={() => {
              handleOTP(forgotEmail)
              setIsForgot(false)
              setIsReset(true)
              // user ? history.push('/') : history.push('/login')
            }}
          >
            Send Mail
          </button>
        </div>
      </Dialog>
    </Transition>
      {/**/}

      {/* JSX FOR OPENING A MODAL FOR Loading */}
      <Transition
      show={isReset}
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
        open={isReset}
        onClose={closeReset}
        className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
      >
        <Dialog.Overlay className="bg-green-400" />
        <div
          className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
          style={{ width: "300px" }}
        >
          <Dialog.Title className="text-xl mb-3 text-center text-greyText">
            Reset Password!
          </Dialog.Title>

          <Dialog.Description className="text-center text-greyText p-5">
            <p className='text-greyText text-base'>Enter Credentials</p>
            <input
            name="OTP"
            className="bg-inputBg mt-2 rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Enter OTP here"
            type="otp"
            onChange={(event) => setOtp(event.target.value)}
            autoComplete="false"
            />
            <input
            name="password"
            className="bg-inputBg mt-2 rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Password"
            type="password"
            onChange={(event) => setNewPassword(event.target.value)}
            autoComplete="false"
            />
            <input
            name="passwordxd"
            className="bg-inputBg mt-2 rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Confirm Password"
            type="password"
            onChange={(event) => setNewConfirmPassword(event.target.value)}
            autoComplete="false"
            />
          </Dialog.Description>

          {isLoading ? (
            <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
              <Loader
                visible={isLoading}
                style={{ margin: 'auto' }}
                type="MutatingDots"
                secondaryColor="#d31c3e"
                color="#D31C3E"
                height={100}
                width={100}
              />
            </div>
          ) : null}

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
                setIsReset(false)
                // history.push('/')
              }}
              style={{ top: "10px", right: "10px" }}
              className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
            />
          </p>

          <button
            className={`${secondaryButtonStyles} mt-3`}
            disabled={resetDisable}
            onClick={() => {
              console.log("Nice and easy")
              handleResetPassword()
              // user ? history.push('/') : history.push('/login')
            }}
          >
            Send Mail
          </button>
        </div>
      </Dialog>
    </Transition>
      {/* JSX FOR OPENING A MODAL FOR Resetting Password */}











      {/* JSX FOR OPENING A MODAL FOR reseting Password */}
      
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  if(state.userState){
    if (state.userState.user) return { user: state.userState.user.userName };
  }
  else {
    return { user: null };
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user) => dispatch(loginUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
