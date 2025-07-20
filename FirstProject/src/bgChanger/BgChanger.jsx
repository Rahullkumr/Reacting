import { useState } from "react";

const BgChanger = () => {
  let [bgColor, setBgColor] = useState(`#363636`);
  let handleClick = () => {
    let randomVal = "";
    const hexCol = "0123456789abcdef";
    for (let i = 1; i <= 6; i++) {
      let ri = Math.floor(Math.random() * 15);
      randomVal += hexCol[ri];
    }
    setBgColor(`#${randomVal}`);
  };
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="text-white p-5 w-[100vw] h-[100vh] flex justify-center items-center"
    >
      <button
        onClick={handleClick}
        className="border p-2 rounded-full text-2xl bg-black"
      >
        Click Me
      </button>
    </div>
  );
};

export default BgChanger;
