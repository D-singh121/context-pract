import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-white font-bold">Hello ,lets learn redux with Todo list</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
