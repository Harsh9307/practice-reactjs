const CommentList = ({ comments, setComments, postId }) => {
    const deleteComment = (commentId) => {
      setComments(comments.filter((comment) => comment.id !== commentId));
    };
  
    return (
      <ul className="mt-2 p-2 border border-gray-300 rounded">
        {comments.length === 0 && <p className="text-gray-500">No comments yet.</p>}
        {comments.map((comment) => (
          <li key={comment.id} className="text-sm text-gray-600">
            <strong>{comment.email}:</strong> {comment.body}
            <button onClick={() => deleteComment(comment.id)} className="ml-2 text-red-500">🗑</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default CommentList;
  