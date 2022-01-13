import MyPage from "./MyPage";
import { SpeakerphoneIcon } from "@heroicons/react/outline";

function MyPages() {
  return (
    <div className="mb-3">
      <h3 className=" font-medium text-gray-500 mb-3 mt-3">Your Pages</h3>
      {[1, 2, 3].map((val) => (
        <MyPage key={val} />
      ))}
      <a href="#" className="flex items-center ml-3 space-x-2">
        <SpeakerphoneIcon className="h-5 text-gray-600" />
        <p className="text-sm font-medium text-gray-500">Create Promotions</p>
      </a>
    </div>
  );
}

export default MyPages;
