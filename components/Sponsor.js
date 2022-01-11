function Sponsor() {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <img src="/sponsor.png" alt="" className=" h-16" />
      <div className="w-24 leading-4">
        <p className="text-gray-800 font-medium">Long sponsor title</p>
        <a href="#" className="text-sm text-gray-500">
          sponsor.com
        </a>
      </div>
    </div>
  );
}

export default Sponsor;
