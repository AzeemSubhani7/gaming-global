// Core Libraries
import React, { useEffect, useState, Fragment } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { Transition, Dialog } from "@headlessui/react";
import {
  secondaryButtonStyles,
} from "../../components/Button/Button";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Icons
import { HeartIcon, ShieldCheckIcon } from "@heroicons/react/solid";
import { EmojiSadIcon } from "@heroicons/react/solid";
import { XCircleIcon } from "@heroicons/react/solid";
// Classes
import { defaultButtonStyles } from "../../components/Button/Button";
// Utilities
import { baseUrl } from "../../utils/backendUrl";

const PostPage = (props) => {
  // console.log(props);
  // console.log(props.match.params);
  // console.log(props.token);

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [reportOpen, setReportOpen] = useState(false);


  const [isPostLiked, setIsPostLiked] = useState(null);
  const [isPostUnliked, setIsPostUnliked] = useState(null);
  const [makeComment, setMakeComment] = useState("");
  const [statusCode, setStatusCode] = useState(null);
  const [reportText, setReportText] = useState('')
  const [reportDisable, setReportDisable] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setReportDisable(false)
    if(!reportText) {
      setReportDisable(true)
    }
  },[reportText])
  const closeReportModal = () => setReportOpen(false);

  // Use-Effect for fetching the psot!
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/api/post/${props.match.params.id}`,
          {
            headers: { Authorization: props.token },
          }
        );
        if (response.data) {
          console.log(response.data);
          setPost(response.data);
        }
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    fetchPost();
  }, [isPostLiked, isPostUnliked, loading, props.token, props.match.params.id]);

  const likePost = async () => {
    // try{
    //   const response = await axios.post(`${baseUrl}/api/post/likes/${props.match.params.id}`, {
    //     headers: { Authorization: props.token }
    //   })
    //   if(response.data) {
    //     console.log(response.data)
    //     setIsPostLiked(true);
    //     setIsPostUnliked(false);
    //   }
    // }
    // catch(error) {
    //   console.log(error)
    // }

    fetch(`${baseUrl}/api/post/likes/${props.match.params.id}`, {
      headers: { Authorization: props.token },
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsPostLiked(true);
        setIsPostUnliked(false);
      })
      .catch((err) => console.log(err));
  };

  const unlikePost = () => {
    fetch(`${baseUrl}/api/post/unlikes/${props.match.params.id}`, {
      headers: { Authorization: props.token },
      method: "POST",
    })
      .then((res) => {
        console.log(res);
        if (res.status === 400) {
          setStatusCode(400);
        }
        res.json();
      })
      .then((data) => {
        if (statusCode === 400) {
          return null;
        } else {
          console.log(data);
          setIsPostUnliked(true);
          setIsPostLiked(false);
        }
      })
      .catch((err) => alert(err.message));
  };

  // const likePost = async () => {
  //   try {
  //     const response = await axios.post(
  //       `${baseUrl}/api/post/likes/${props.match.params.id}`,
  //       {
  //         headers: { Authorization: props.token },
  //       }
  //     );
  //     if (response.data) {
  //       console.log(response.data)
  //       setIsPostLiked(true);
  //       alert("Post has been liked!");
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     alert(e);
  //   }
  // };

  const createComment = () => {
    setLoading(true);
    fetch(`${baseUrl}/api/post/comment/${props.match.params.id}`, {
      headers: {
        Authorization: props.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: makeComment }),
      method: "POST",
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        return console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const deleteComment = (commentID) => {
    setLoading(true);
    fetch(`${baseUrl}/api/${props.match.params.id}/comment/del/${commentID}`, {
      headers: {
        Authorization: props.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: makeComment }),
      method: "delete",
    })
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        return console.log(data);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const navigateToUserProfile = (id) => {
    props.history.push(`/profile/user/${id}`)
  }
  const handleChange = (event) => {
    setMakeComment(event.target.value);
  };

  console.log(post);
  console.log(props)
  // console.log(error);

  const handleReport = () => {
    fetch(`${baseUrl}/api/reports/${props.match.params.id}`, {
      headers: {
        Authorization: props.token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reportText: reportText }),
      method: "POST",
    })
      .then((res) => {
        setIsLoading(false);
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setReportOpen(false)
        alert("Report has been Sent to the admin")
        return console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  const deleteThisPost = async() => {
      try{
        const response = await axios.delete(`${baseUrl}/api/admin/deletepost/${post._id}`);
        if(response.data) {
          console.log(response.data)
          props.history.push('/profile/feed')
        }
      }
      catch(error) {
        console.error(error)
      }
    }

  if (error) {
    return (
      <div className="text-red-500 flex items-center justify-center text-center text-xl">
        There was an error fetching the post
      </div>
    );
  }

  if (!post) {
    return (
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
    );
  }

  return (
    <div>
      <Header />
      <div className="post-main my-5 mx-auto text-greyText flex items-center justify-center">
        <div className="p-10">
          {/*Post Header Start section-1*/}
          <div className=" flex items-center justify-between">
            <div className=" flex items-center space-x-3">
              <img
                src={post.user.userAvatar ? post.user.userAvatar : 'https://picsum.photos/200/300'}
                alt="saman sayyar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div 
                onClick={() => navigateToUserProfile(post.user._id)}
                className="cursor-pointer transform  hover:scale-110 hover:text-secondary transition-all duration-300">
                {post.user.userName}
              </div>
              <div className='admin Check'>
              {
                post.user.role === 'root' ? <ShieldCheckIcon
                className={`
                    text-greyText
                  w-8 h-8`}
              /> : null
              }
              </div>
            </div>
            <div className=" flex items-center justify-center">
              <div 
              className='cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300'
              onClick={() => setReportOpen(true)}>Report</div>
              <div
              className='cursor-pointer transform hover:scale-110 ml-4 hover:text-secondary transition-all duration-300'
              onClick={() => deleteThisPost()}
              >{ post.user._id === props.userIdxD ? "Delete" : null }</div>
            </div>
          </div>
          {/*Post Header Start section-1*/}

          {/*Post Image Start section-2*/}
          {post.postImageUrl ? (
            <div className="postImage my-4">
              <div className="relative w-full h-full">
                <img
                  src={post.postImageUrl}
                  alt="saman"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          ) : null}
          {/*Post Image end section-2*/}

          {/*Actuall Post text start*/}

          <div className="min-h-scree mt-5 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 opacity-80 bg-primary-light shadow-lg sm:rounded-3xl sm:p-20">
                <div className="max-w-md mx-auto">
                  <div className="bg-primary-light mt-3">
                    <div className="bg-primary-light shadow p-5 text-xl text-greyText font-semibold">
                      {post.postText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Actuall Post text end*/}

          {/*Post Like section-3*/}

          <div className="Like cursor-pointer flex items-center justify-center ">
            <HeartIcon
              onClick={() => likePost()}
              className={`transform hover:scale-110 ${
                isPostLiked ? "text-secondary" : "text-greyText"
              } hover:text-secondary transition-all duration-300 w-8 h-8`}
            />
            <div className="ml-2">Like</div>
            <div className="mx-2 text-greyText">{post.postLikes.length}</div>

            <EmojiSadIcon
              onClick={() => unlikePost()}
              className={`transform hover:scale-110 ${
                isPostUnliked ? "text-secondary" : "text-greyText"
              } hover:text-secondary transition-all duration-300 w-8 h-8`}
            />
            <div className="ml-2">Unlike</div>
          </div>

          {/*Post Like section-3*/}

          <div className="bg-primary-light mt-4 rounded-xl p-8">
            <div className="text-xl text-center">Comments</div>

            <div className="create-post flex items-center justify-center">
              <div className="bg-primary-light flex w-52 sm:w-80 md:w-96 lg:w-2/4  px-4 justify-center relative rounded-lg py-4">
                <div className="input mt-6 h-2/4 w-full rounded-md ">
                  <textarea
                    className="bg-primary-dark rounded-xl form-textarea mt-1 block w-full p-4 text-gray-100 outline-none"
                    rows="6"
                    placeholder="Write a post."
                    onChange={handleChange}
                  ></textarea>
                  <div className="flex items-end flex-col">
                    <button
                      className={`${defaultButtonStyles} mt-2`}
                      disabled={!makeComment}
                      onClick={() => createComment()}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader
                visible={loading}
                style={{ margin: "auto" }}
                type="MutatingDots"
                secondaryColor="#d31c3e"
                color="#D31C3E"
                height={100}
                width={100}
              />
            </div>
          </div>

          {/*Last section of comments*/}
          {post.postComments.length > 0 ? (
            post.postComments.map((item) => {
              return (
                <div
                  key={item._id}
                  className="flex justify-center mt-3 p-3 border-b-8 border-primary-light flex-col space-y-2"
                >
                  <div className="flex justify-between">
                    <div className="font-semibold text-lg">
                      {item.user.userName}
                    </div>
                    <div>
                      {item.user._id === props.userIdxD ? (
                        <XCircleIcon
                          onClick={() => deleteComment(item._id)}
                          className="v-8 h-8 text-greyText hover:text-secondary transition-all duration-300"
                        />
                      ) : null}
                    </div>
                  </div>
                  <div className="font-light">{item.text}</div>
                </div>
              );
            })
          ) : (
            <div className="flex justify-center mt-3 p-3 border-b-8 border-primary-light flex-col space-y-2">
              <div>No Comments</div>
            </div>
          )}

          {/*Last section of comments*/}
        </div>
      </div>
      
      {/* JSX FOR OPENING A MODAL FOR Loading */}
      <Transition
      show={reportOpen}
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
        open={reportOpen}
        onClose={closeReportModal}
        className="fixed flex items-center justify-center flex-col bg-primary-dark z-50 inset-0 overflow-hidden"
      >
        <Dialog.Overlay className="bg-green-400" />
        <div
          className="bg-primary-light rounded-xl flex flex-col justify-center items-center p-5"
          style={{ width: "300px" }}
        >
          <Dialog.Title className="text-xl mb-3 text-center text-greyText">
            Report This Post to the Admins
          </Dialog.Title>

          <Dialog.Description className="text-center text-greyText p-5">
            <p className='text-greyText text-base'>Enter your Opinion</p>
            <input
            name="reporttext"
            className="bg-inputBg mt-2 rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
            placeholder="Enter Report Text"
            type="reportText"
            onChange={(event) => setReportText(event.target.value)}
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
                setReportOpen(false)
                // history.push('/')
              }}
              style={{ top: "10px", right: "10px" }}
              className="h-10 w-10 absolute cursor-pointer transform transition-all duration-300 hover:scale-110 text-greyText hover:text-secondary"
            />
          </p>

          <button
            className={`${secondaryButtonStyles} mt-3`}
            disabled={reportDisable}
            onClick={() => {
              setIsLoading(true)
              handleReport()
              console.log("Nice and easy")
              // handleResetPassword()
              // user ? history.push('/') : history.push('/login')
            }}
          >
            Send Report
          </button>
        </div>
      </Dialog>
    </Transition>
      {/* JSX FOR OPENING A MODAL FOR Resetting Password */}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    token: state.userState.user.token,
    userIdxD: state.userState.user._id,
  };
};

export default connect(mapStateToProps)(PostPage);
