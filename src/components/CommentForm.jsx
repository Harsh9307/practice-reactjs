import { useState } from "react";

const CommentForm = ({ postId, setComments }) => {
  const [text, setText] = useState("");

  const addComment = () => {
    if (!text.trim()) return;

    const newComment = {
      postId,
      id: Date.now(),
      name: "You",
      email: "you@example.com",
      body: text,
    };

    setComments((prev) => [...prev, newComment]);
    setText("");
  };

  return (
    <div className="mt-2">
      <input
        type="text"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={addComment} className="mt-2 px-4 py-2 bg-green-500 text-white rounded">
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
