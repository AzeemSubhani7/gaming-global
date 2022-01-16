// Libraries
import React, {useEffect, useState, Fragment} from 'react'
import { XCircleIcon} from "@heroicons/react/outline";
import axios from 'axios';
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { Transition, Dialog } from "@headlessui/react";
// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// Utils
import { baseUrl } from "../utils/backendUrl";
import {
  secondaryButtonStyles,
} from "../components/Button/Button";

const EditProfilePage = ({ history, user }) => {
  
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [image, setImage] = useState('')
  const [disable, setDisable] = useState(true)
  const [imageChange, setImageChange] = useState(false);
  const [isActiveSpinner, setIsActiveSpinner] = useState(false)
  const [isOpenFollower, setIsOpenFollower] = useState(false);
  const closeFollowModal = () => setIsOpenFollower(false);

  const uploadImage = async (id) => {
    try {
      const formData = new FormData();
      formData.append("file",image);
      formData.append("upload_preset", "vwshavqm")
      formData.append("cloud_name", "dbpqxxmf2");


      const response = await axios.post("https://api.cloudinary.com/v1_1/dbpqxxmf2/image/upload", formData)
      if(response.data) {
        // console.log(response.data)
        const profileData = {
          userName: userName ? userName : null,
          profilePic: response.data.url ? response.data.url : null,
          password: password ? password :null,
          id: id
        }
        axios.patch(`${baseUrl}/changemyprofile`, profileData).then(() => {
          setIsActiveSpinner(false)
          setIsOpenFollower(true)
        }).catch(error => alert(error))
        // console.log(response2)
        // if(response2) {
        //   setIsActiveSpinner(false)
        //   console.log("we good!")

        // }
      }
    }
    catch(error) {
      alert(error)
      console.log(error)
    }
  }

  const handleSubmit = async(id) => {
    setIsActiveSpinner(true)
    try {
      if(imageChange) {
        console.log("Handling Submit!")
        uploadImage(id)
      }
      else {
        const profileData = {
          userName: userName ? userName : null,
          profilePic: null,
          password: password ? password :null,
          id: id
        }
        axios.patch(`${baseUrl}/changemyprofile`, profileData).then(() => {
          setIsActiveSpinner(false)
          setIsOpenFollower(true)
        }).catch(error => alert(error))
      }
    }
    catch(error) {
      setIsActiveSpinner(false)
      console.log(error)
      alert(error)
    }

    
  }

  // UseEffect For Error Handling!
  useEffect(() => {
    setDisable(false)
    if(!userName && !password && !confirmPassword && !image) {
      setDisable(true)
    }
    if( password && !confirmPassword) {
      setDisable(true)
    }
    if( confirmPassword && !password) {
      setDisable(true)
    }
    if( password !== confirmPassword) {
      setDisable(true)
    } 
  },[image,userName,password,confirmPassword])

  console.log(user)
  if(!user) {
    return(
      <div className='edit profile page'>
        <Header />
          <div className='main text-center my-6 text-2xl text-greyText'>
            No User Found!
          </div>
        <Footer />
    </div>
    )
  }
  return(
    <div className='edit profile page'>
    <Header />

    <div className='main text-center my-6 bg-primary-light p-20 m-10 rounded-xl text-greyText'>
    <div className='z-50 relative bg-primary-light flex-col space-y-4 rounded-xl p-10 flex items-center justify-center'>
    <h1 className='text-center font-semibold text-xl sm:text-2xl  text-gray-200'>Edit Profile</h1>
    <h1 className='text-center text-sm sm:text-sm  text-gray-200'>Leave Fields you dont want to change</h1>
    <input 
      name="userName"
      className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
      placeholder="Name"
      onChange={(event) => setUserName(event.target.value)}
      autoComplete='false'
      />
      <input 
      name="password"
      className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
      placeholder="Password"
      onChange={(event) => setPassword(event.target.value)}
      type='password'
      autoComplete='false'
      />
      <input 
      name="confirm-password"
      className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
      placeholder="Confirm Password"
      onChange={(event) => setConfirmPassword(event.target.value)}
      type='password'
      autoComplete='false'
      />
      <div className='flex items-center justify-center ml-36'>
        <input
        type="file"
        className=''
        onChange={(e) => setImage(e.target.files[0])}
        />      
      </div>
      <button
      disabled={disable}
      onClick={() => {
        if(Image) {
          setImageChange(true)
        }
        handleSubmit(user._id)
      }}
      className='disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-3 px-8 text-center rounded-full hover:scale-110 transform transition-all duration-300 outline-none  shadow-lg'
      >Commit Changes</button>
  </div> 
  {isActiveSpinner ? (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
      <Loader
        visible={isActiveSpinner}
        style={{ margin: 'auto' }}
        type="MutatingDots"
        secondaryColor="#d31c3e"
        color="#D31C3E"
        height={100}
        width={100}
      />
    </div>
  ) : null}
    </div>
    {/*Openning Model*/}
      
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
          Response
        </Dialog.Title>

        <Dialog.Description className="text-center text-greyText p-5">
          The Changes has been committed!
        </Dialog.Description>

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
              setIsOpenFollower(false);
              history.push('/social')
            }}
            style={{ top: "10px", right: "10px" }}
            className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
          />
        </div>

        <button
          className={`${secondaryButtonStyles} mt-3`}
          onClick={() => {
            setIsOpenFollower(false);
            history.push('/social')
          }}
        >
          OKAY
        </button>
      </div>
    </Dialog>
  </Transition>
    {/*Closing Model*/}
    <Footer />
    </div>
  )

}

const mapStateToProps = (state) => {
  // console.log(state.userState.user)
  if (state.userState) {
    return { user: state.userState.user };
  } else {
    return { user: null };
  }
};

export default connect(mapStateToProps)(EditProfilePage);