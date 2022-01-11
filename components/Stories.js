import { ClockIcon } from "@heroicons/react/outline";
import Story from "./Story";

function Stories() {
  return (
    <div className="bg-white my-1 px-2 pb-3">
      <div className="flex items-center mb-2">
        <p className="text-base font-medium">Stories</p>
        <ClockIcon className="h-4 ml-auto text-gray-400" />
        <p className="text-base text-gray-400">Your archive</p>
      </div>
      <div className="flex items-center justify-start space-x-1 lg:space-x-2 w-[99%] overflow-y-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
          <Story key={val} />
        ))}
      </div>
    </div>
  );
}

export default Stories;
