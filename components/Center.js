import Posts from "./Posts";
import Stories from "./Stories";
import InsertPost from "./InsertPost";

function Center() {
  return (
    <div className=" overflow-y-auto  h-[90%] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 px-4">
      <div>
        <Stories />
        <InsertPost />
        <Posts />
      </div>
    </div>
  );
}

export default Center;
