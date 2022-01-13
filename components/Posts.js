import Post from "./Post";
import PersonalPost from "./PersonalPost";
import PersonalPostTwo from "./PersonalPostTwo";

function Posts() {
  return (
    <div className="sm:w-[87%] sm:mx-auto">
      {[1, 2, 3].map((val) => (
        <div key={val}>
          <Post />
          <PersonalPost />
          <PersonalPostTwo />
        </div>
      ))}
    </div>
  );
}

export default Posts;
