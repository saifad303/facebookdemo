import { ClockIcon } from "@heroicons/react/outline";
import { useRef, useEffect } from "react";
import Story from "./Story";

function Stories() {
  const scrollRef = useRef();
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return (
    <div className="bg-white px-2 py-2 rounded-md mt-3 lg:mt-0">
      <div className="flex items-center mb-2 mx-2">
        <p className="text-base font-medium">Stories</p>
        <ClockIcon className="h-4 ml-auto text-gray-400" />
        <p className="text-base text-gray-400">Your archive</p>
      </div>
      <div
        className="flex items-center justify-start pb-4 space-x-1 lg:space-x-2 w-[99%] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white"
        ref={scrollRef}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val) => (
          <Story key={val} />
        ))}
      </div>
    </div>
  );
}

export default Stories;
