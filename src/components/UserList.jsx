import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDomain, setFilterDomain] = useState("");

  // Function to fetch users
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users. Try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch users when component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtered users based on search & filter
  const filteredUsers = users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterDomain ? user.email.endsWith(filterDomain) : true)
    );
  });

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-xl font-bold text-center mb-4">User List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
      />

      {/* Filter Dropdown */}
      <select
        value={filterDomain}
        onChange={(e) => setFilterDomain(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Domains</option>
        <option value="@gmail.com">Gmail</option>
        <option value="@yahoo.com">Yahoo</option>
        <option value="@outlook.com">Outlook</option>
      </select>

      {/* Reload Button */}
      <button
        onClick={fetchUsers}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4 w-full"
      >
        Reload Users
      </button>

      {/* Error Handling */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading users...</p>}

      {/* User List */}
      <ul className="divide-y divide-gray-300">
        {filteredUsers.length === 0 ? (
          <p className="text-gray-500">No users found.</p>
        ) : (
          filteredUsers.map((user) => (
            <li key={user.id} className="py-2">
              <p className="font-semibold">{user.name}</p>
              <p className="text-gray-500">{user.email}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default UserList;
