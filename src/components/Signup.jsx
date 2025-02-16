import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../auth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    saveUser(email, password);
    alert("Signup successful! Please log in.");
    navigate("/login");
  };

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignup}>
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
        <button className="w-full p-2 bg-blue-500 text-white rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
