import {
  UsersIcon,
  UserGroupIcon,
  FlagIcon,
  ShoppingBagIcon,
  PlayIcon,
  ClockIcon,
  BookmarkIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CreditCardIcon,
  StarIcon,
  HeartIcon,
  TemplateIcon,
  BriefcaseIcon,
  SunIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
function Sidebar() {
  const [isSeeMore, setIsSeeMore] = useState(false);
  return (
    <div className="pl-6 flex flex-col items-start w-[300px] h-screen bg-gray-200">
      <div className=" w-full overflow-y-hidden hover:overflow-y-auto h-[94%] pt-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <img
            src="/smallProfile.jpg"
            className="h-8 w-8 rounded-full -left-[4px] -top-[4px]"
            alt=""
          />
          <p className="text-base font-medium">Saif Ahmed Asif</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <UsersIcon className="h-6 w-8 text-blue-500" />
          <p className=" font-medium">Friends</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <div className=" rounded-full bg-blue-500 p-1">
            <UserGroupIcon className="h-5 w-5 text-white" />
          </div>
          <p className=" font-medium">Groups</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <FlagIcon className="h-7 w-7 text-blue-500" />
          <p className=" font-medium">Pages</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <ShoppingBagIcon className="h-7 w-7 text-blue-500" />
          <p className="font-medium">Marketplace</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <PlayIcon className="h-7 w-7 text-blue-500" />
          <p className="font-medium">Watch</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <ClockIcon className="h-7 w-7 text-blue-500" />
          <p className="font-medium">Memories</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <BookmarkIcon className="h-7 w-7 text-blue-500" />
          <p className="font-medium">Saved</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <CalendarIcon className="h-7 w-7 text-blue-500" />
          <p className="font-medium">Events</p>
        </button>

        {isSeeMore ? (
          <>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <CreditCardIcon className="h-7 w-7 text-gray-800" />
              <p className="font-medium">Facebook Pay</p>
            </button>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <StarIcon className="h-7 w-7 text-yellow-500" />
              <p className="font-medium">Favorites</p>
            </button>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <HeartIcon className="h-7 w-7 text-red-500" />
              <p className="font-medium">Fundraisers</p>
            </button>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <TemplateIcon className="h-7 w-7 text-cyan-500" />
              <p className="font-medium">Game</p>
            </button>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <BriefcaseIcon className="h-7 w-7 text-amber-600" />
              <p className="font-medium">Jobs</p>
            </button>
            <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
              <SunIcon className="h-7 w-7 text-yellow-500" />
              <p className="font-medium">Weather</p>
            </button>
          </>
        ) : (
          ""
        )}
        {isSeeMore ? (
          <button
            onClick={() => setIsSeeMore(!isSeeMore)}
            className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none"
          >
            <div className=" rounded-full bg-gray-300 p-1">
              <ChevronUpIcon className="h-6 w-6 font-medium" />
            </div>
            <p className=" font-medium">Show Less</p>
          </button>
        ) : (
          <button
            onClick={() => setIsSeeMore(!isSeeMore)}
            className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none"
          >
            <div className=" rounded-full bg-gray-300 p-1">
              <ChevronDownIcon className="h-6 w-6 font-medium" />
            </div>
            <p className=" font-medium">See more</p>
          </button>
        )}

        <div className="h-[1px] w-full bg-gray-400  my-5" />
        <p className=" text-gray-600 font-medium text-lg">Your Shortcuts</p>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <img src="js.png" className="h-8 w-8" alt="" />
          <p className="font-medium">Javascript</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <img src="react.png" className="h-8 w-8" alt="" />
          <p className="font-medium">React</p>
        </button>
        <button className="flex items-center justify-start space-x-2 hover:bg-gray-300 w-full py-3 pl-2 rounded-md rounded-r-none">
          <img src="github.png" className="h-8 w-8 rounded" alt="" />
          <p className="font-medium">Github</p>
        </button>
        <p className="text-sm font-medium text-gray-600 px-3 pt-1 w-[260px] pb-4">
          The only purpose of this project is to show my experience over
          front-end by replicating some design of facebook.
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
