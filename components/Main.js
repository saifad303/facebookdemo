import Sidebar from "./Sidebar";
import Center from "./Center";
import RightSidebar from "./RightSidebar";

function Main() {
  return (
    <div className="flex items-start justify-between bg-gray-200">
      <div className=" hidden xl:inline-block shrink-0">
        <Sidebar />
      </div>
      <div className="w-full sm:px-5 lg:w-[65%] lg:ml-14 lg:mt-9 xl:w-[50%] xl:ml-0 2xl:w-[43%] h-screen">
        <Center />
      </div>
      <div className="hidden lg:inline-block w-64 mt-1 xl:w-[20%]">
        <RightSidebar />
      </div>
    </div>
  );
}

export default Main;
