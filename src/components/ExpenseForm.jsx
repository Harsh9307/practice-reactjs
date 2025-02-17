import { useState, useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount || !category) return;
    
    dispatch({
      type: "ADD_EXPENSE",
      payload: { text, amount: parseFloat(amount), category },
    });

    setText("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Expense name"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 border rounded w-full mb-2"
      >
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Bills">Bills</option>
      </select>
      <button className="p-2 bg-blue-500 text-white rounded w-full">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
