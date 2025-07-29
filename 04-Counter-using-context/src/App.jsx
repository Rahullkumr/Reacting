import { useContext } from "react";
import { counterContext } from "./contexts";
import "./App.css";

const App = () => {
  let [count, setCount] = useContext(counterContext);
  return (
    <div className="text-white bg-black h-screen flex justify-center items-center text-3xl">
      <button
        className="border p-5 rounded-full hover:bg-slate-900"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        You have clicked me <span className="text-green-500">{count}</span>{" "}
        times
      </button>
    </div>
  );
};

export default App;
