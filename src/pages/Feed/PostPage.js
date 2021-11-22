// Core Libraries
import React, {useState} from "react";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Icons
import { HeartIcon } from "@heroicons/react/solid";
// Classes
import { defaultButtonStyles } from "../../components/Button/Button";

const PostPage = () => {

  const [makeComment, setMakeComment] = useState('')

  console.log(makeComment);

  const handleChange = (event) => {
    setMakeComment(event.target.value);
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
              <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
                Azeem Subhani
              </div>
            </div>
            <div className="cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300">
              <div>Report</div>
            </div>
          </div>
          {/*Post Header Start section-1*/}

          {/*Post Image Start section-2*/}
          <div className="postImage my-4">
            <div className="relative w-full h-full">
              <img
                src="https://wallpaperaccess.com/full/345330.jpg"
                alt="saman"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
          {/*Post Image end section-2*/}

          {/*Post Like section-3*/}

          <div className="Like cursor-pointer flex items-center justify-center ">
            <HeartIcon className="transform hover:scale-110 hover:text-secondary transition-all duration-300 w-8 h-8" />
          </div>

          {/*Post Like section-3*/}

          <div className="bg-primary-light mt-4 rounded-xl p-8">
            <div className="text-xl text-center">Comments</div>

            <div
              className="create-post flex items-center justify-center"
            >
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
            <div className='flex justify-center mt-3 p-3 border-b-8 border-primary-light flex-col space-y-2'>
              <div>
                Azeem Subhani
              </div>
              <div>
                This is the Random Comment by a random user XD;
              </div>
            </div>
          {/*Last section of comments*/}


        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostPage;
