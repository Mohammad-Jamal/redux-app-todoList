import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decNum, incNum } from "./actions";

const Counter = () => {
  const myData = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="w-full h-screen bg-black flex flex-col gap-10 items-center justify-center">
      <h1 className="text-pink-300 text-4xl font-bold">React Redux</h1>
      <h1 className="text-pink-300 text-4xl font-bold">Count : {myData}</h1>
      <div>
        <button
          className="text-red-200 text-2xl hover:border-green-400 hover:text-green-400 rounded-full text-center border-red-200 border-4 font-bold bg-yellow-500 px-4 py-2"
          type="button"
          onClick={() => dispatch(incNum())}
        >
          +
        </button>
        <button
          className="ml-5 text-red-200 text-2xl hover:border-green-400 hover:text-green-400  font-bold rounded-full border-red-200 border-4 bg-blue-300 text-center px-5 py-2 "
          type="button"
          onClick={() => dispatch(decNum())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
