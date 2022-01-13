import Sponsors from "./Sponsors";
import MyPages from "./MyPages";
import Contacts from "./Contacts";

function RightSidebar() {
  return (
    <div className="h-screen pl-1">
      <div className=" overflow-y-hidden hover:overflow-y-auto w-[90%] h-[92%] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <div className="w-[300px]">
          <Sponsors />
          <div className="w-full h-[1px] bg-gray-300" />
          <MyPages />
          <div className="w-full h-[1px] bg-gray-300" />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
