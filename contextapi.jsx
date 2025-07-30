import React, { createContext, useContext, useState } from "react";

// Create context
const CounterContext = createContext();

// Counter provider component
function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext value={{ count, increment }}>{children}</CounterContext>
  );
}

// Counter button component
function CounterButton() {
  const { count, increment } = useContext(CounterContext);

  return (
    <button
      onClick={increment}
      className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95"
    >
      {count}
    </button>
  );
}

// Main app component
export default function App() {
  return (
    <CounterProvider>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <CounterButton />
      </div>
    </CounterProvider>
  );
}
