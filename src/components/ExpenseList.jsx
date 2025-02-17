import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h3 className="text-xl font-bold">Transactions</h3>
      <ul>
        {expenses.length === 0 ? (
          <p className="text-gray-500">No expenses recorded</p>
        ) : (
          expenses.map((expense) => <ExpenseItem key={expense.id} expense={expense} />)
        )}
      </ul>
    </div>
  );
};

export default ExpenseList;
