import React, {useState, useEffect} from 'react'
import SignUpBackgroundImage from '../../images/signUp_BG_optimized.jpg'
import { Transition } from '@headlessui/react'
import axios from 'axios';

const linearBackgroundStyle = {
  background:
    "linear-gradient(0deg, rgba(31, 29, 41, 1) 1%, rgba(255, 255, 255, 0) 49%, rgba(31, 29, 41, 1) 97%)",
  height: '90vh',
  width: '100%',
  position: 'absolute',
  top: '-16px',
  left: '0px'
};

const DashboardAddPatch = () => {
  const [title, setTitle] = useState('')
  const [patchVersion, setPatchVersion] = useState('')
  const [patchText, setPatchText] = useState('')
  const [forGame, setForGame] = useState('')
  const [formError, setFormError] = useState(true)

  const [flag, setFlag] = useState(false)

  const [isNotAbleToSubmit, setNotIsAbleToSubmit] = useState(true)
  const [errorMsg, setErrorMsg] = useState("There is an error")
  const [isError, setIsError] = useState(false)


  useEffect(()=>{

    setIsError(false)
    // setLoginError(false)
    const isAbleToSubmit = () => {
      setFormError(false)
      setNotIsAbleToSubmit(true)
      if(!title) {
        setErrorMsg("Title is required!")
        setIsError(true)
        setFormError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(title.length < 3) {
        setErrorMsg("Title length Should be at least 3")
        setIsError(true)
        setFormError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!patchText) {
        setErrorMsg("Patch Text is Required!")
        setIsError(true)
        setFormError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!patchVersion) {
        setErrorMsg("Patch Version is Required!")
        setIsError(true)
        setFormError(true)
        return setNotIsAbleToSubmit(true);
      }
      if(!forGame) {
        setErrorMsg("Game Required!")
        setIsError(true)
        setFormError(true)
        return setNotIsAbleToSubmit(true);
      }

      if(forGame) {
        if(forGame !== 'rainbow' &&  forGame !== 'fortnite' ) {
          setErrorMsg("Game Should be rainbow/fortnite")
          setIsError(true)
          setFormError(true)
          return setNotIsAbleToSubmit(true);
        }
      }

      if(formError) return setNotIsAbleToSubmit(true)

      return setNotIsAbleToSubmit(false)
    }
    isAbleToSubmit()
  }, [title,patchText,patchVersion,forGame,formError])



  const handleSubmit = async () => {
    try{
      const patchToAdd = {
        title: title,
        patch: patchVersion,
        text: patchText,
        for: forGame
      }
      // console.log(userToRegister)
      const postResponse =await axios.post(`http://localhost:4000/addpatch`, patchToAdd, {headers:{"Content-Type" : "application/json"}})
    
      if(postResponse) {
        setFlag(true)
        handlePostSubmit()
        console.log(postResponse)
      }
    }
    catch(e){
        console.log(e);
        alert("Someting is wrong with Server")
        console.log("Something is wronge with credentials TRY-AGAIN")
    }
  }

  const handlePostSubmit = async () => {
    setTimeout(() => {
        setFlag(false)
    }, 3000);
  }

  return(
    <div className='bg-primary-light w-full'>
    <div className="flex p-12 items-center overflow-hidden space-y-4 flex-col justify-center" style={{ height: '90vh', position: 'relative' }} >
        <div className='rounded-xl' style={{ height: '90vh', width: '100%', backgroundImage: `url(${SignUpBackgroundImage})`, filter: 'blur(10px)', position: 'absolute', top: '0px', left: '0px' }} >
        
        </div>
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
          <h1 className='text-center font-semibold text-xl sm:text-2xl  text-gray-200'>Add New Patches</h1>
          <input 
            name="title"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
            autoComplete='false'
            />
            <input 
            name="patchVersion"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Patch Version"
            onChange={(event) => setPatchVersion(event.target.value)}
            autoComplete='false'
            />
            <input 
            name="patchText"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="Patch Text"
            onChange={(event) => setPatchText(event.target.value)}
            autoComplete='false'
            />
            <input 
            name="forgame"
            className='bg-inputBg rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm' 
            placeholder="For [rainbow - fortnite]"
            onChange={(event) => setForGame(event.target.value)}
            autoComplete='false'
            />
            <button
            disabled={isNotAbleToSubmit}
            onClick={handleSubmit}
            className='disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-2 text-center w-full rounded-2xl hover:scale-110 transform transition-all duration-300 outline-none  shadow-lg'
            >Add the Patch</button>

            <div className='my-10'>
            <Transition
            show={flag}
            enter='transition-all ease-in-out duration-700 transform'
            enterFrom='opacity-0 translate-y-full'
            enterTo='translate-y-0 opacity-100'
            leave="transition-all ease-in-out duration-700 transform"
            leaveFrom='opacity-100 translate-y-0'
            leaveTo="opacity-0 translate-y-full"
            >
            <div className={`border-solid border-4 z-50 bg-primary-light flex items-center justify-center p-10 text-greyText font-semibold rounded-xl relative`}>
            The Patch has been added Successfully!
          </div>
            </Transition>
            </div>
        </div>    
      </div>
    </div>
  )
}

export default DashboardAddPatch;