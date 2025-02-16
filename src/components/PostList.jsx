import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const limit = 5;

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}?_limit=${limit}&_page=${page}`);
      setPosts((prevPosts) => [...prevPosts, ...response.data]);
    } catch (err) {
      setError("Failed to fetch posts. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold text-center mb-4">Posts</h1>
      {error && <p className="text-red-500">{error}</p>}

      <ul className="divide-y divide-gray-300">
        {posts.map((post) => (
          <li key={post.id} className="py-2">
            <Link to={`/posts/${post.id}`} className="font-semibold text-blue-500">
              {post.title}
            </Link>
            <p className="text-gray-500">{post.body.slice(0, 50)}...</p>
          </li>
        ))}
      </ul>

      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4 w-full"
        disabled={loading}
      >
        {loading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};

export default PostList;
