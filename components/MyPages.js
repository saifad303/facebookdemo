import MyPage from "./MyPage";

function MyPages() {
  return (
    <div>
      <h3 className=" font-medium text-gray-500 mb-3 mt-3">Your Pages</h3>
      {[1, 2, 3].map((val) => (
        <MyPage key={val} />
      ))}
    </div>
  );
}

export default MyPages;
