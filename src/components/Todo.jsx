import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen bg-blue-950 flex flex-col items-center justify-center gap-7">
      <h1 className="text-3xl text-purple-400 font-bold">
        Todo List Using REDUX{" "}
      </h1>
      <div className="flex gap-3">
        <input
          type="text"
          className="py-2 px-10 w-auto text-xl rounded-xl placeholder:text-xl focus:ring-blue-300 outline-blue-300"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button
          className="px-3 py-2 rounded-xl font-semibold active:border-white active:border-2 bg-violet-400 text-white"
          onClick={() => dispatch(addTodo(inputData), setInputData(""))}
        >
          Add
        </button>
      </div>
      <div className="w-1/3 flex flex-col gap-5 items-baseline">
        {list.map((eachItem, index) => (
          <div
            key={index}
            className="bg-gray-500 rounded-md py-2 gap-5 px-5 w-full flex items-center justify-between"
          >
            <p className="text-pink-200">{eachItem.data}</p>
            <button
              className="px-3 py-2 text-sm rounded-xl font-semibold active:border-white active:border-2 bg-violet-400 text-white"
              onClick={() => dispatch(deleteTodo(eachItem.id))}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div>
        <button
          className="px-3 py-2 text-sm rounded-xl font-semibold active:border-white active:border-2 bg-violet-400 text-white"
          onClick={() => dispatch(removeTodo())}
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default Todo;
