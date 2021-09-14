// Libraries
import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import  validator from 'validator'
// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

// Images
import SignUpBackgroundImage from '../images/signUp_BG_optimized.jpg'

// Linear Background Styles
const linearBackgroundStyle = {
  background:
    "linear-gradient(0deg, rgba(31, 29, 41, 1) 1%, rgba(255, 255, 255, 0) 49%, rgba(31, 29, 41, 1) 95%)",
  height: '90vh',
  width: '100%',
  position: 'absolute',
  top: '-16px',
  left: '0px'
};


const LoginPage = () => {
  const [isError, setIsError] = useState(false)
  const [isNotAbleToSubmit, setIsNotAbleToSubmit] = useState(true)
  const [errorMsg, setErrorMsg] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // UseEffect for data validation

  useEffect(() => {

    setIsError(false);

    const isAbleToSubmit = () => {
      if(!password) {
        setErrorMsg("Password is required!")
        setIsError(true)
        return setIsNotAbleToSubmit(true);
      }
      if(!email) {
        setErrorMsg("Email is required!")
        setIsError(true)
        return setIsNotAbleToSubmit(true);
      }

      if(!validator.isEmail(email)) {
        setErrorMsg("Not A valid Email")
        setIsError(true)
        return setIsNotAbleToSubmit(true);
      }


      if(password.length < 6) {
        setErrorMsg("Password Length Must be 6 characters!")
        setIsError(true)
        return setIsNotAbleToSubmit(true)
      }

      return setIsNotAbleToSubmit(false)

    }
    isAbleToSubmit()

  },[isError,isNotAbleToSubmit,errorMsg,email,password])

  // useEffect for cleaning


  return (
    <div className='loginPage'>
      <Header />
      <div className="flex items-center overflow-hidden space-y-4 flex-col justify-center" style={{ height: '90vh', position: 'relative' }} >
      <div className='rounded-xl z-10' style={{ height: '90vh', width:'100%' , backgroundImage: `url(${SignUpBackgroundImage})`, filter: 'blur(5px)', position: 'absolute', top: '0px', left: '0px' }} />
      <div className='rounded-xl z-20' style={linearBackgroundStyle} />


      <Transition
          show={isError}
          enter='transition-all ease-in-out duration-700 transform'
          enterFrom='opacity-0 translate-y-full'
          enterTo='translate-y-0 opacity-100'
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom='opacity-100 translate-y-0'
          leaveTo="opacity-0 translate-y-full"
          >
          <div className={`border-secondary border-solid border-4 z-50 bg-primary-light flex items-center justify-center p-10 text-secondary font-semibold rounded-xl relative`}>
          {errorMsg}
        </div>
          </Transition>

          <div className='z-50 relative bg-primary-light flex-col space-y-4 rounded-xl p-10 flex items-center justify-center'>
          <h1 className='text-center font-semibold text-xl sm:text-2xl  text-gray-200'>Sign Up</h1>

            <input 
            name="email"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Email"
            type='email'
            onChange={(event) => setEmail(event.target.value)}
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

            <button
            disabled={isNotAbleToSubmit}
            onClick={() => console.log("Everything is good to go")}
            className='disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-2 text-center w-full rounded-2xl hover:scale-110 transform transition-all duration-300 outline-none  shadow-lg'
            >Sign Up</button>
        </div>  

      </div>
      <Footer />
    </div>
  )
}

export default LoginPage;