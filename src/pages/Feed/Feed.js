// Libraries
import React, {useState, Fragment} from "react";
import { connect } from "react-redux";
import axios from "axios";
import { XCircleIcon } from "@heroicons/react/outline";
import { Transition, Dialog } from "@headlessui/react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

// Views
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { defaultButtonStyles, secondaryButtonStyles } from "../../components/Button/Button";

// BaseUrl
import { baseUrl } from "../../utils/backendUrl";
import ShowPosts from "../../components/Post/ShowPost";

const FeedPage = ({ userId, token, history }) => {

  const [postText, setPostText] = useState('')
  const [response, setResponse] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [isActiveSpinner, setIsActiveSpinner] = useState(false);
  const closeModal = () => setIsOpen(false)

  const handleChange = (e) => {
    setPostText(e.target.value)
  }


  const createPost = async () => {
    setIsActiveSpinner(true)
    try{
      const postToBeMade = {
        user: userId,
        postText
      }
      const postResponse =await axios.post(`${baseUrl}/api/post`, postToBeMade, {headers:{"Authorization" : token}})
      // console.log(postResponse)
      if(postResponse.data) {
        setResponse(postResponse)
        console.log(response)
        setIsActiveSpinner(false)
        setIsOpen(true)
      }
    }
    catch(error){
      setIsActiveSpinner(false)
      setIsOpen(true)
      console.log(error)
    }
  }


  return (
    <div className="feed-page">
    <Header />
    <div className="flex flex-col items-center justify-center">
      {/* Create Post Component*/}
      <div className="create-post flex items-center justify-center" style={{ width: '100vw' }}>
        <div
          className="bg-primary-light flex w-52 sm:w-80 md:w-96 lg:w-2/4  px-4 justify-center relative rounded-lg py-4"
        >
          <div className="input mt-6 h-2/4 w-full rounded-md ">
            <textarea
              className="bg-primary-dark rounded-xl form-textarea mt-1 block w-full p-4 text-gray-100 outline-none"
              rows="6"
              placeholder="Write a post."
              onChange={handleChange}
            ></textarea>
            <div className="flex items-end flex-col">
              {/*<label className={`w-36 mt-2 h-11 flex  rounded-2xl justify-center flex-col  items-center space-x-3 ${secondaryButtonStyles} `}>
                <span className="font-medium text-base">Add Image</span>
                <input type="file" className="hidden" />
              </label>*/}
              <button 
              className={`${defaultButtonStyles} mt-2`}
              disabled={!postText}
              onClick={() => createPost()}
                >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ width: '100vw' }} className='mt-20'>
        <ShowPosts token={token} />
      </div>

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
          { response ? ' Success ' : ' Error ' }
        </Dialog.Title>

        <Dialog.Description className="text-center text-greyText p-5">
          { response ? 'Post has been made' : 'Ops there is an error' }
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
              setIsOpen(false)
              history.push('/profile/feed')
            }}
            style={{ top: "10px", right: "10px" }}
            className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
          />
        </p>

        <button
          className={`${secondaryButtonStyles} mt-3`}
          onClick={() => {
            setIsOpen(false)
            history.push('/profile/feed')
          }}
        >
          OKAY
        </button>
      </div>
    </Dialog>
  </Transition>
  {/**/}


  {/* JSX FOR OPENING A MODAL FOR Loading */}
    
  
  {/* JSX for rendering the posts */}
    <div className='w-full flex items-center justify-center'>
      <div className='py-8 w-1/2 flex items-center justify-center'>
          
      </div>
    </div>
    <Footer />
  </div>
  );
};


const mapStateToProps = state => {
  return {
    token: state.userState.user.token,
    userId: state.userState.user._id
  }
}

export default connect(mapStateToProps)(FeedPage);
