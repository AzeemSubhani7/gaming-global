// Libraries
import React, { useState, useEffect } from 'react'
import  validator from 'validator'
import { Transition } from '@headlessui/react'
import axios from 'axios';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

// Components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

// Images
import SignUpBackgroundImage from '../images/signUp_BG_optimized.jpg'

// Utilitites
import { loginUser } from '../redux/action'
// import { baseUrl } from '../utils/backendUrl';

const SignUpPage = ({ loginUser, user }) => {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [formError, setFormError] = useState(true)

  const [response, setResponse] = useState(null)

  const [isNotAbleToSubmit, setNotIsAbleToSubmit] = useState(true)
  const [errorMsg, setErrorMsg] = useState("There is an error")
  const [isError, setIsError] = useState(false)


  // Creating an history object 
  var history = useHistory();


  // useEffect for checking weather able to submit or not
  useEffect(()=>{

    setIsError(false)
    // setLoginError(false)
    const isAbleToSubmit = () => {
      setNotIsAbleToSubmit(true)
      if(!userName) {
        setErrorMsg("User Name is required!")
        setIsError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(userName.length < 3) {
        setErrorMsg("User Name should be at least 3 characters")
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

  // useEffect for Cleaning
  useEffect(() => {
    return () => {
        setUserName('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setFormError(true)
        setResponse(null)
        setNotIsAbleToSubmit(true)
    }
  },[])

    const handleSubmit = async () => {
      try{
        const userToRegister = {
          userName,
          email,
          password
        }
        // console.log(userToRegister)
        const postResponse =await axios.post(`http://localhost:4000/api/user`, userToRegister, {headers:{"Content-Type" : "application/json"}})
        loginUser(postResponse.data)
        alert("user Registered!")
        history.push("/")
        
        setResponse(postResponse)
        if(response) {
          // console.log(response)
        }
      }
      catch(e){
          console.log(e);
          setIsError(true)
          alert("Someting is wrong with Credentials!")
          history.push("/signup")
          console.log("Something is wronge with credentials TRY-AGAIN")
      }
    }
  useEffect(() => {
    // console.log(loginUser)
    // console.log(user)
    //   console.log(props.user.user)
    //   if(props.user.user) {
    //   history.push('/')
    // }
      
  })

  return(
    <div>
      <Header />
      <div className="flex items-center overflow-hidden space-y-4 flex-col justify-center" style={{ height: '90vh', position: 'relative' }} >
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
        <div className='z-10 relative bg-primary-light flex-col space-y-4 rounded-xl p-10 flex items-center justify-center'>
          <h1 className='text-center font-semibold text-xl sm:text-2xl  text-gray-200'>Sign Up</h1>
          <input 
            name="userName"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Name"
            onChange={(event) => setUserName(event.target.value)}
            autoComplete='false'
            />
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
            <input 
            name="confirm-password"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
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

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: user => dispatch(loginUser(user))
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userState
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);