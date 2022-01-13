import Contact from "./Contact";
import {
  VideoCameraIcon,
  DotsVerticalIcon,
  SearchIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import axios from "axios";

function Contacts() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log(res.data);
      setUsers([...res.data]);
    });
  }, []);
  return (
    <div className="pb-3">
      <div className="flex items-center justify-between mt-3 mb-4 mx-2">
        <h3 className="text-base font-medium text-gray-500">Contacts</h3>
        <button>
          <VideoCameraIcon className="h-5 text-gray-500" />
        </button>
        <button>
          <SearchIcon className="h-4 text-gray-500" />
        </button>
        <button>
          <DotsVerticalIcon className="h-5 text-gray-500" />
        </button>
      </div>
      {users.map((data, index) => (
        <Contact name={data.name} key={index} />
      ))}
      <div className="w-full h-[1px] bg-gray-300" />
      <p className="text-gray-500 font-medium text-lg my-3">
        Group conversation
      </p>
      <Contact name={"My family group"} />
      <Contact name={"My friends group"} />
      <Contact name={"My colleagues group"} />

      <button className="flex items-center ml-3 space-x-2">
        <div className="bg-gray-300 rounded-full p-1">
          <PlusIcon className="h-4 text-gray-600" />
        </div>
        <p className="font-medium">Create new group</p>
      </button>
    </div>
  );
}

export default Contacts;
