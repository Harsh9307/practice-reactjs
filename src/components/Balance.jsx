import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const Balance = () => {
  const { expenses } = useContext(ExpenseContext);
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="text-xl font-bold">Total Balance: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Balance;
