import {
  GlobeAltIcon,
  DotsHorizontalIcon,
  ThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/solid";

import {
  PhotographIcon,
  CameraIcon,
  EmojiHappyIcon,
  GiftIcon,
} from "@heroicons/react/outline";

import LikeCommentShare from "./LikeCommentShare";

function PersonalPost() {
  return (
    <div className="px-3 bg-white pb-1 my-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-start space-x-2 my-3">
          <img src="/noman.png" className="rounded-full h-11 w-11" alt="" />
          <div>
            <p className="text-base font-medium">User name</p>
            <a href="#" className="flex items-center">
              <p className="text-sm font-medium text-gray-500">4h . </p>
              <GlobeAltIcon className="text-gray-400 h-4" />
            </a>
          </div>
        </div>
        <DotsHorizontalIcon className="text-gray-500 h-5" />
      </div>
      <div className="leading-6 mb-3">
        <p>The react master class : </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sint
          iusto iure odio quae ad quaerat placeat deserunt? Ipsum vero
          accusantium illo ullam,
        </p>
      </div>
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center">
          <div className=" bg-red-500 rounded-full p-1 mr-1">
            <HeartIcon className="h-4 text-white" />
          </div>
          <div className=" bg-blue-500 rounded-full p-1 mr-2">
            <ThumbUpIcon className="h-4 text-white" />
          </div>
          <p className=" text-gray-600">60</p>
        </div>
        <p className=" font-normal">Share 1</p>
      </div>
      <div className="w-full h-[1px] bg-gray-300" />
      <LikeCommentShare />
      <div className="w-full h-[1px] bg-gray-300" />
      <div className="flex items-center justify-center space-x-3 my-2 relative w-[88%] mx-auto">
        <img src="/smallProfile.jpg" className="rounded-full h-9 w-9" alt="" />
        <input
          type="text"
          className="bg-gray-200 outline-none rounded-full py-2 px-4 w-[98%] sm:w-[98%] placeholder:text-sm sm:placeholder:text-base"
          placeholder="Write public comment"
        />
        <div className="absolute flex items-center right-2 sm:right-4 sm:space-x-2">
          <EmojiHappyIcon className=" h-5 text-gray-500" />
          <CameraIcon className=" h-5 text-gray-500" />
          <PhotographIcon className=" h-5 text-gray-500" />
          <GiftIcon className=" h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default PersonalPost;
