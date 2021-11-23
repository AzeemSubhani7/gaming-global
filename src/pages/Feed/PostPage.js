// Core Libraries
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Icons
import { HeartIcon } from "@heroicons/react/solid";
import { EmojiSadIcon } from "@heroicons/react/solid";
// Classes
import { defaultButtonStyles } from "../../components/Button/Button";
// Utilities
import { baseUrl } from "../../utils/backendUrl";

const PostPage = (props) => {
  console.log(props);
  console.log(props.match.params);
  console.log(props.token);

  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  const [isPostLiked, setIsPostLiked] = useState(null);
  const [isPostUnliked, setIsPostUnliked] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

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
          setPost(response.data);
        }
      } catch (e) {
        console.log(e);
        setError(e);
      }
    };

    fetchPost();
  }, [isPostLiked, isPostUnliked]);

  const likePost = () => {
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
        if (res.status == 400) {
          setStatusCode(400);
        }
        res.json();
      })
      .then((data) => {
        if (statusCode == 400) {
          return null;
        }
        else{
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

  const [makeComment, setMakeComment] = useState("");

  console.log(makeComment);

  const handleChange = (event) => {
    setMakeComment(event.target.value);
  };

  console.log(post);
  console.log(error);

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
                src="https://avatars.githubusercontent.com/u/68494287?v=4"
                alt="saman sayyar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="cursor-pointer transform  hover:scale-110 hover:text-secondary transition-all duration-300">
                {post.user.userName}
              </div>
            </div>
            <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
              <div>Report</div>
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
                      onClick={() => console.log("we good")}
                    >
                      Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*Last section of comments*/}
          {post.postComments.length > 0 ? (
            post.postComments.map((item) => {
              return (
                <div className="flex justify-center mt-3 p-3 border-b-8 border-primary-light flex-col space-y-2">
                  <div className='font-semibold text-lg'>{item.user.userName}</div>
                  <div className='font-light'>{item.text}</div>
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
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return { token: state.userState.user.token };
};

export default connect(mapStateToProps)(PostPage);
