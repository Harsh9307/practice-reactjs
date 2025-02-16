import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser, loginUser } from "../auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (authenticateUser(email, password)) {
      loginUser();
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border my-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border my-2 rounded"
          required
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
