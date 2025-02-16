import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`${API_URL}/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError("Failed to load post.");
      } finally {
        setLoading(false);
      }
    };

    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL}/${postId}/comments`);
        setComments(response.data);
      } catch (err) {
        console.error("Failed to load comments:", err);
      }
    };

    fetchPost();
    fetchComments();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <Link to="/" className="text-blue-500">⬅ Back to Posts</Link>
      <h1 className="text-xl font-bold mt-2">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>

      <h2 className="text-lg font-semibold mt-4">Comments</h2>
      <CommentList comments={comments} setComments={setComments} postId={postId} />
      <CommentForm postId={postId} setComments={setComments} />
    </div>
  );
};

export default PostDetails;
