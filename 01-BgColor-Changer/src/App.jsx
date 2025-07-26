import { useState } from "react";
import "./App.css";

function App() {
  let [bgc, setBgc] = useState("#262626");

  let handleClick = () => {
    let randomVal = "";
    const hexCol = "0123456789abcdef";
    for (let i = 1; i <= 6; i++) {
      let ri = Math.floor(Math.random() * 15);
      randomVal += hexCol[ri];
    }
    setBgc(`#${randomVal}`);
  };

  return (
    <div
      style={{ backgroundColor: bgc }}
      className="flex justify-center items-center flex-col h-screen"
    >
      <button onClick={handleClick} className="bg-black p-5 rounded-full">
        Change background
      </button>
      <p className="m-5">{bgc}</p>
    </div>
  );
}

export default App;
