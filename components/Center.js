import Posts from "./Posts";
import Stories from "./Stories";
import InsertPost from "./InsertPost";

function Center() {
  return (
    <div className=" overflow-y-auto  h-[94%] lg:h-[89%]  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-200 px-4">
      <div>
        <Stories />
        <InsertPost />
        <Posts />
      </div>
    </div>
  );
}

export default Center;
