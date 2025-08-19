import React ,{useState} from "react";

function LikeButton() {
  const [like, setLike] = useState(false);
  function handleLike(){
    setLike(!like)
  }
  return (
    <div>
      <button onClick={handleLike}>{like ? "❤️" : "💔"}</button>
    </div>
  );
}
export default LikeButton;
