import { useState } from "react";
import "./App.css";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-black h-screen text-white flex justify-center items-center text-3xl">
      <button
        className="border p-5 rounded-full hover:bg-gray-900"
        onClick={() => setCount(count + 1)}
      >
        <p>
          You have clicked me <span className="text-green-500">{count}</span>{" "}
          times
        </p>
      </button>
    </div>
  );
}
