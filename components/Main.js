import Sidebar from "./Sidebar";
import Center from "./Center";
import RightSidebar from "./RightSidebar";

function Main() {
  return (
    <div className="flex items-start justify-between bg-gray-200">
      <div className=" hidden xl:inline-block shrink-0">
        <Sidebar />
      </div>
      <div className="w-full lg:w-[65%] lg:ml-14 lg:mt-9">
        <Center />
      </div>
      <div className=" hidden lg:inline-block w-64 mt-1">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Main;
