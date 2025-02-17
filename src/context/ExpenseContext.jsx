import { createContext, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ExpenseContext = createContext();

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, { id: uuidv4(), ...action.payload }];
    case "REMOVE_EXPENSE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expenseReducer, [], () => {
    const localData = localStorage.getItem("expenses");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <ExpenseContext.Provider value={{ expenses, dispatch }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;
