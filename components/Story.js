import { PlusSmIcon } from "@heroicons/react/outline";
function Story({ val }) {
  return (
    <div className="shrink-0" key={val}>
      <div className="w-24 h-40 sm:w-28 sm:h-48 2xl:w-32 2xl:h-52 bg-gray-400 rounded-xl relative flex items-center justify-center overflow-hidden">
        <img src="/flower.jpg" className="w-full h-full" alt="" />
        <button className="absolute w-10 h-10 bg-white rounded-full top-4 left-4 flex items-center justify-center">
          <PlusSmIcon className="h-7 text-blue-400" />
        </button>
        <div className="w-full h-full bg-black/20 absolute" />
        <div className="absolute text-white font-medium leading-5  bottom-2 left-3">
          <p>Saif</p>
          <p>Ahmed</p>
        </div>
      </div>
    </div>
  );
}

export default Story;
