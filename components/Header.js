import {
  SearchIcon,
  VideoCameraIcon,
  TemplateIcon,
  ChatIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import {
  HomeIcon,
  UserGroupIcon,
  ChevronDownIcon,
  BellIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-2 drop-shadow-md sticky">
      <div className="flex items-center relative">
        <Image src="/facebook.png" height={40} width={40} />
        <input
          type="text"
          className=" w-[80%] hidden md:inline-block outline-none py-2 pl-8 ml-2 rounded-full bg-[#F0F2F5] placeholder:text-gray-500 placeholder:text-sm"
          placeholder="Search facebook"
        />
        <SearchIcon className=" invisible md:visible absolute h-4 text-gray-300 left-14" />

        <button className=" visible md:invisible absolute left-12 bg-gray-200 rounded-full p-2">
          <SearchIcon className="h-5 text-gray-600" />
        </button>
      </div>
      <div className="hidden md:flex items-center">
        <button className="hover:bg-gray-300 lg:px-6 md:px-4 py-1 rounded-md">
          <HomeIcon className="h-8 text-gray-700" />
        </button>
        <button className="hover:bg-gray-300 lg:px-6 md:px-4 py-1 rounded-md">
          <VideoCameraIcon className="h-8 text-gray-700" />
        </button>
        <button className="hover:bg-gray-300 lg:px-6 md:px-4 py-1 rounded-md">
          <div className=" border-2 rounded-full p-1 border-gray-700">
            <UserGroupIcon className="h-6 text-gray-700" />
          </div>
        </button>
        <button className="hover:bg-gray-300 lg:px-6 md:px-4 py-1 rounded-md">
          <TemplateIcon className="h-8 text-gray-700" />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        <button className=" bg-gray-200 rounded-full p-2">
          <div className="relative h-4 w-8 rounded-md bg-gray-200">
            <img
              src="/smallProfile.jpg"
              className="h-6 w-6 rounded-full absolute -left-[4px] -top-[4px]"
              alt=""
            />
          </div>
        </button>
        <button className=" bg-gray-200 rounded-full p-2">
          <PlusIcon className="h-5 " />
        </button>
        <button className=" bg-gray-200 rounded-full p-2">
          <ChatIcon className="h-5 " />
        </button>
        <button className=" bg-gray-200 rounded-full p-2">
          <BellIcon className="h-5 " />
        </button>
        <button className=" bg-gray-200 rounded-full p-2">
          <ChevronDownIcon className="h-5 " />
        </button>
      </div>
    </header>
  );
}

export default Header;
