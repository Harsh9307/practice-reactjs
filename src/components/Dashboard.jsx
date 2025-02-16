import { useNavigate } from "react-router-dom";
import { logoutUser } from "../auth";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold">Welcome to Dashboard</h2>
      <p>You are logged in!</p>
      <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
