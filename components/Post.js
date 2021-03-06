import {
  GlobeAltIcon,
  DotsHorizontalIcon,
  ThumbUpIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import LikeCommentShare from "./LikeCommentShare";

function Post() {
  return (
    <div className="px-3 bg-white pb-1 my-4 rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-start space-x-2 my-3">
          <img src="/react.png" className="rounded-full h-11 w-11" alt="" />
          <div>
            <p className="text-base font-medium">Learn react bootcamp</p>
            <a href="#" className="flex items-center">
              <p className="text-sm font-medium text-gray-500">Sponsored . </p>
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
      <img src="/reactbig.png" className=" w-full h-[40%]" alt="" />
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
    </div>
  );
}

export default Post;
