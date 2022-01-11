import Sponsors from "./Sponsors";
import MyPages from "./MyPages";

function RightSidebar() {
  return (
    <div className=" overflow-y-auto">
      <Sponsors />
      <div className="w-[90%] h-[1px] bg-gray-300" />
      <MyPages />
    </div>
  );
}

export default RightSidebar;
