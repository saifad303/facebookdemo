import {
  ThumbUpIcon,
  AnnotationIcon,
  ShareIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";

function LikeCommentShare() {
  return (
    <div className="flex items-center justify-between my-2 sm:justify-center sm:space-x-14 md:space-x-20">
      <button className="flex items-center space-x-1">
        <p className="text-gray-500 font-medium">Like</p>
        <ThumbUpIcon className="h-5 text-gray-500" />
      </button>
      <button className="flex items-center space-x-1">
        <p className="text-gray-500 font-medium">Comments</p>
        <AnnotationIcon className="h-5 text-gray-500" />
      </button>
      <button className="flex items-center space-x-1">
        <p className="text-gray-500 font-medium">Share</p>
        <ShareIcon className="h-5 text-gray-500" />
      </button>
      <button className="flex items-center space-x-1">
        <img src="/smallProfile.jpg" className="h-5 w-5 rounded-full" alt="" />
        <ChevronDownIcon className="h-4 text-gray-500" />
      </button>
    </div>
  );
}

export default LikeCommentShare;
