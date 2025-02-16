import { useState, useEffect } from "react";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(() => Number(localStorage.getItem("count")) || initialValue);
  const [step, setStep] = useState(1);

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count > 0 ? count - step : 0);
  const reset = () => setCount(0);

  return { count, step, setStep, increment, decrement, reset };
};

export default useCounter;
