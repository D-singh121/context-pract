import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const disPatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault(); //*** preventDefault isliye taki input me todo likhte hi vo submit na ho jaye */
    disPatch(addTodo(input)); //*** store me values bhej rahe hai  */
    setInput(""); //** values bhejne ke baad humara input place emplty ho jana chahiye uske liye hum input state ko setInput() se fir se blank kar denge  */
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
