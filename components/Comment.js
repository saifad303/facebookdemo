import { DotsHorizontalIcon } from "@heroicons/react/outline";

function Comment() {
  return (
    <div>
      <div className="flex items-start w-[94%] mx-auto">
        <img src="/noman.png" className="h-9 w-9 rounded-full mr-6" alt="" />
        <p className=" bg-gray-200 rounded-2xl w-[74%] p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          facere.Lorem ipsum dolor sit amet consectetur
        </p>
        <DotsHorizontalIcon className="h-5 ml-auto self-center" />
      </div>
      <div className="text-gray-600 text-sm font-medium ml-20">
        <a href="#">Like . </a>
        <a href="#">Replay . </a>
        <a href="#">Share . </a>
        <p className="inline-block">10h</p>
      </div>
      <button className="text-gray-600 font-medium ml-5 my-2">
        View more answers
      </button>
    </div>
  );
}

export default Comment;
