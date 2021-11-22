// Libraries
import React from "react";
import { useHistory } from "react-router";

const PostWithoutImage = (props) => {
  // console.log(props);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/posts/${props.postId}`)
  }
  return (
    <div className="min-h-scree mt-5 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 opacity-80 bg-primary-light shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="bg-primary-light mt-3">
            <div className='text-greyText text-xl my-3'>{props.userName}</div>
              <div className="bg-primary-light shadow p-5 text-xl text-greyText font-semibold">
                {props.postText}
              </div>
              <div className="bg-primary-light text-greyText p-1 rounded-b-lg items-center justify-center flex flex-row flex-wrap">
                <div 
                onClick={() => handleClick()}
                className='cursor-pointer transform hover:scale-110 hover:text-secondary transition-all duration-300'>View Post</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWithoutImage;
