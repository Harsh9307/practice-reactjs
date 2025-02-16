import useCounter from "../hooks/useCounter";
import ThemeToggle from "./ui/ThemeToggle";
import Button from "./ui/Button";

const Counter = () => {
  const { count, step, setStep, increment, decrement, reset } = useCounter(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      {/* Theme Toggle Button */}
      <ThemeToggle />

      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <p className="text-xl mb-2">Count: {count}</p>

      {/* Step Input */}
      <div className="mb-4">
        <label className="mr-2">Step:</label>
        <input
          type="number"
          className="border px-2 py-1 rounded text-black"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>

      <div className="flex space-x-4">
        <Button className="bg-blue-500 hover:bg-blue-600" onClick={increment}>
          Increment
        </Button>
        <Button className="bg-red-500 hover:bg-red-600" onClick={decrement} disabled={count === 0}>
          Decrement
        </Button>
        <Button className="bg-gray-500 hover:bg-gray-600" onClick={reset}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
