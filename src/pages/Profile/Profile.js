// Libraries
import React, {Fragment} from 'react'
import { connect } from 'react-redux';
import { Transition } from '@headlessui/react';
import { defaultButtonStyles, secondaryButtonStyles } from '../../components/Button/Button';
// Components
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Icons
import { PencilIcon } from '@heroicons/react/outline';

// Actions
import { clearLoggedUser } from '../../redux/action';


const ProfilePage = ({ user, history, match, clearLoggedUser }) => {
  // console.log(user)
  // console.log(history)
  // console.log(match)
  // console.log(props)
  const handleBannedUser = () => {
    clearLoggedUser();
    history.push('/')
  }

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
                GamingGlobal Has Banned <span className='text-secondary font-extrabold'>{user.userName}</span> <br />
                from the application.
              </h1>
              <div
                className="sensCard bg-primary-light my-10 mx-16 text-sm text-center md:text-base p-4 md:p-10 text-greyText lg:mx-80 rounded-xl"
                style={{ height: "40%" }}
              >
                <p>
                  You are banned because you didn't follow the community rules and guidelines.
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

  return (
    <div className="profile-page">
      <Header />
      <div className='profile-page-container'>
          {/*First Section*/}
          <div className='bg-primary-light overflow-hidden m-5 rounded-xl p-5 flex items-center flex-col relative'>
            <PencilIcon
              onClick={() => {
              console.log("Edit this profile")
              }}
              style={{ top: "10px", right: "20px" }}
              className="h-6 w-6 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
              />
            <div 
              className='absolute text-sm text-greyText' 
              style={{ top: '40px', right: "20px" }}>
              Edit  
            </div>


              <div className='bg-primary-dark lg:h-64 lg:w-64 h-44 w-44 overflow-hidden relative border-greyText border-4 rounded-full'>
                <img src='https://picsum.photos/200/300?grayscale'
                     className='absolute lg:h-64 lg:w-64 h-44 w-44'
                     alt='profile of a user'
                />
              </div>

              <div className='text-center font-medium text-3xl mt-3 text-greyText'>
                Azeem
              </div>
              {/*A bit of logic in future*/}
              <div className='my-2 flex space-x-4'>
                <button className={defaultButtonStyles}>Follow</button>
                <button className={secondaryButtonStyles}>Whisper</button>
              </div>

              <div className="bg-primary-light md:bg-primary-dark flex items-center justify-evenly mt-3 px-10 py-2 rounded-xl">
                <div className='m-3 divide-y-2 divide-greyText flex flex-col space-y-4 items-center'>
                  <p className='font-medium text-xl text-greyText'>Followers</p>

                  <p className=' font-medium text-xl text-greyText'>199</p>
                </div>
                <div className='m-3 divide-y-2 divide-greyText flex flex-col space-y-4 items-center'>
                  <p className='font-medium text-xl text-greyText'>Following</p>
                  <p className=' font-medium text-xl text-greyText'>098</p>
                </div>
              </div>

          </div>
          {/*Second Section*/}
      </div>
      <Footer />
    </div>
  )
}
const mapStateToProps = (state) => {
  // console.log(state.userState.user)
  if (state.userState) {
    return { user: state.userState.user };
  } else {
    return { user: null }
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearLoggedUser: () => dispatch(clearLoggedUser())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);