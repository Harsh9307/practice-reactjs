import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!username.trim()) return;
    onSearch(username);
  };

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mt-4">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
    </form>
  );
};

export default SearchBar;
