import {
  VideoCameraIcon,
  PhotographIcon,
  EmojiHappyIcon,
} from "@heroicons/react/solid";

function InsertPost() {
  return (
    <div className="bg-white my-1 px-5 pb-3 mt-3 pt-3 rounded-md sm:w-[87%] sm:mx-auto">
      <div className="flex items-center justify-center space-x-3">
        <img
          src="/smallProfile.jpg"
          className="rounded-full h-10 w-10"
          alt=""
        />
        <input
          type="text"
          className="bg-gray-200 outline-none rounded-full py-2 px-4 w-80 sm:w-[85%] placeholder:text-base"
          placeholder="Whats on your mind, Saif"
        />
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-3" />
      <div className="flex items-center justify-center space-x-6 sm:space-x-8">
        <button className="flex items-center justify-center space-x-2">
          <VideoCameraIcon className=" h-9 text-red-600" />
          <p className="text-sm font-medium text-gray-500">Live Video</p>
        </button>
        <button className="flex items-center justify-center space-x-2">
          <PhotographIcon className=" h-9 text-green-600" />
          <p className="text-sm font-medium text-gray-500">Photo/Video</p>
        </button>
        <button className="hidden sm:flex items-center justify-center space-x-2">
          <EmojiHappyIcon className=" h-9 text-yellow-400" />
          <p className="text-sm font-medium text-gray-500">Feelings/Activity</p>
        </button>
      </div>
    </div>
  );
}

export default InsertPost;
