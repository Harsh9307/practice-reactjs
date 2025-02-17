import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseItem = ({ expense }) => {
  const { dispatch } = useContext(ExpenseContext);

  return (
    <li className="flex justify-between bg-white shadow-md p-2 mt-2 rounded">
      <span>{expense.text} ({expense.category})</span>
      <span className="font-bold">${expense.amount}</span>
      <button
        onClick={() => dispatch({ type: "REMOVE_EXPENSE", payload: expense.id })}
        className="text-red-500"
      >
        ❌
      </button>
    </li>
  );
};

export default ExpenseItem;
