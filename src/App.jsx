// import { useState } from "react";
// import axios from "axios";
// import SearchBar from "./components/SearchBar";
// import UserProfile from "./components/UserProfile";

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [repos, setRepos] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchUser = async (username) => {
//     setLoading(true);
//     setError(null);
//     setUser(null);
//     setRepos([]);

//     try {
//       const userResponse = await axios.get(`https://api.github.com/users/${username}`);
//       const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);

//       setUser(userResponse.data);
//       setRepos(reposResponse.data);
//     } catch (err) {
//       setError("User not found!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-2xl font-bold text-center">GitHub User Finder</h1>
//       <SearchBar onSearch={fetchUser} />
//       {loading && <p className="text-center text-gray-500">Loading...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}
//       {user && <UserProfile user={user} repos={repos} />}
//     </div>
//   );
// };

// export default App;


import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Balance from "./components/Balance";

const App = () => {
  return (
    <ExpenseProvider>
      <div className="max-w-md mx-auto p-4">
        <h1 className="text-2xl font-bold text-center">Expense Tracker</h1>
        <Balance />
        <ExpenseForm />
        <ExpenseList />
      </div>
    </ExpenseProvider>
  );
};

export default App;
