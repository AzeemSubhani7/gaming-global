// Libraries
import React, { useState, useEffect } from 'react'
import  validator from 'validator'
import { Transition } from '@headlessui/react'

// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// Images
import SignUpBackgroundImage from '../images/signUp_BG_optimized.jpg'

// Utilitites


const SignUpPage = () => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formError, setFormError] = useState(true)

  const [isNotAbleToSubmit, setNotIsAbleToSubmit] = useState(true)
  const [errorMsg, setErrorMsg] = useState("There is an error")
  const [isError, setIsError] = useState(false)

  // useEffect for checking weather able to submit or not
  useEffect(()=>{

    setIsError(false)
    const isAbleToSubmit = () => {
      setNotIsAbleToSubmit(true)
      if(!userName) {
        setErrorMsg("User Name is required!")
        setIsError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!password) {
        setErrorMsg("Password is required!")
        setIsError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!email) {
        setErrorMsg("Email is required!")
        setIsError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!confirmPassword) {
        setErrorMsg("Enter password one more time")
        setIsError(true)
        return setNotIsAbleToSubmit(true);
      }

      if(validator.isEmail(email)) {
        console.log(email)
        console.log(validator.isEmail(email))
        setFormError(false)
      }
      else{
        setErrorMsg("Not A Valid Email!")
        setIsError(true)
        setFormError(true)
      }

      if(password.length < 6) {
        setErrorMsg("Password Length Must be 6 characters!")
        setIsError(true)
        setFormError(true)
      }

      if(password !== confirmPassword) {
        setErrorMsg("Please Enter the same password!")
        setIsError(true)
        setFormError(true)
      } 

      if(formError) return setNotIsAbleToSubmit(true)

      return setNotIsAbleToSubmit(false)
    }
    isAbleToSubmit()
  }, [userName,password,email,confirmPassword,formError])

    const handleSubmit = () => {
      console.log(userName)
      console.log(email)
      console.log(password)
      console.log(confirmPassword)
    }

  return(
    <div>
      <Header />
      <div className="p-5 flex items-center space-y-4 flex-col justify-center" style={{ height: '90vh', position: 'relative' }} >
        <div className='rounded-xl' style={{ height: '90vh', width: '100%', backgroundImage: `url(${SignUpBackgroundImage})`, filter: 'blur(10px)', position: 'absolute', top: '10px', left: '10px' }} >
        
        </div>
        <Transition
          show={isError}
          enter='transition-all ease-in-out duration-700 transform'
          enterFrom='opacity-0 translate-y-full'
          enterTo='translate-y-0 opacity-100'
          leave="transition-all ease-in-out duration-700 transform"
          leaveFrom='opacity-100 translate-y-0'
          leaveTo="opacity-0 translate-y-full"
          >
          <div className={` bg-primary-light flex items-center justify-center p-10 text-secondary font-semibold rounded-xl relative`}>
          {errorMsg}
        </div>
          </Transition>
        <div className='z-10 relative bg-primary-light flex-col space-y-4 rounded-xl sm:p-10 p-5 flex items-center justify-center'>
          <h1 className='text-center font-semibold text-xl sm:text-2xl  text-gray-200'>Sign Up</h1>
          <input 
            name="userName"
            className='bg-inputBg rounded-3xl outline-none sm:pr-20 py-2 pl-4 pr-10 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Name"
            onChange={(event) => setUserName(event.target.value)}
            autoComplete='false'
            />
            <input 
            name="email"
            className='bg-inputBg rounded-3xl outline-none sm:pr-20 py-2 pl-4 pr-10 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Email"
            type='email'
            onChange={(event) => setEmail(event.target.value)}
            autoComplete='false'
            />
            <input 
            name="password"
            className='bg-inputBg rounded-3xl outline-none sm:pr-20 py-2 pl-4 pr-10 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            type='password'
            autoComplete='false'
            />
            <input 
            name="confirm-password"
            className='bg-inputBg rounded-3xl outline-none sm:pr-20 py-2 pl-4 pr-10 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Confirm Password"
            onChange={(event) => setConfirmPassword(event.target.value)}
            type='password'
            autoComplete='false'
            />
            <button
            disabled={isNotAbleToSubmit}
            onClick={handleSubmit}
            className='disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-2 text-center w-full rounded-2xl hover:scale-110 transform transition-all duration-300 outline-none  shadow-lg'
            >Sign Up</button>
        </div>    
      </div>
      <div className='mt-10'>
      <Footer />
      </div>
    </div>
  )
}

export default SignUpPage;