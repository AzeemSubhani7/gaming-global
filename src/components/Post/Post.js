// Libraries
import React from "react";

const Post = () => {
  return (
    <div className="Post-renderer">
      <div className="bg-primary-light rounded-lg sm:w-52 md:w-80 lg:w-2/4 text-greyText py-2 px-3">
        <div className="flex items-center rounded-lg p-2 justify-between max-h-20">
          <div className="flex space-x-4 items-center">
            <img
              className="h-16 w-16 rounded-full ml-4"
              src="https://avatars0.githubusercontent.com/u/38799309?v=4"
              alt="jaja ture ja"
            />
            <h1 className="ml-2">Azeem Subhani</h1>
          </div>
          <div className="mr-4">:</div>
        </div>

        <div className="my-4 text-center">
          I need a squad to push my rank in valorant
        </div>

        <div className="bg-primary-dark mt-4 rounded-2xl overflow-hidden">
          <img
            className="w-full bg-cover"
            alt="xd lamaoo haha"
            src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
          />
        </div>

        <div className="text-center my-4">
          <span className="text-sm text-greyText font-medium">View Post</span>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Post;