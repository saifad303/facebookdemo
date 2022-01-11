function MyPage() {
  return (
    <div className="flex items-center space-x-2 mb-3">
      <img src="/fbpage.jpeg" alt="" className=" h-16" />
      <div className="w-24 leading-4">
        <p className="text-gray-800 font-medium">Long page title</p>
        <a href="#" className="text-sm text-gray-500">
          pagelink.com
        </a>
      </div>
    </div>
  );
}

export default MyPage;
