import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  //***** hume todo context ko store karne ke liye state chahiye thats why we are using useState*/
  const [todos, setTodos] = useState([]);

  // ****** todos context functions declaration
  const addTodo = (todo) => {
    //----- todo ko array me add karte samay hum previous value ko bhi rakhenge uske liye " prev" and return karega ek array.//
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    //***** hum previous todo me map use karenge ,fir usme se prevId ko current updatTodo id se match karenge agar id match ho gai to prevtodo ko current updated todo se update kar denge agar nahi match hui to prevTodo ko hi rahne denge  */
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    //***  delete karne ke liye hum  previous todo array ka access lenge fir hum filter method ka use karke true values ko return kar denge jo hamari id se match nahi karegi */
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    //**** sabse pahle hum previous array ki state ka access lenge usme fir map lagayenge to uski sabhi values ka access mil jayega fir hum useme new toggle id ko match karenge agar id match hui to hum completed property ki boolean value ko revers kar denge ! se   */
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    //***** local storage is a browser property which stores the data in form of string without any expiration time . jab humara site relode hoga to hume previous todos ko store karna padega jo bhi humare local storage me set honge in forms of string  */
    const todos = JSON.parse(localStorage.getItem("todos"));
    // console.log(todos);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    //*****    ab hume browser local storage me todos data set bhi to karne padenge  uske liye hum ek aur useEffect ka use karenge  but localstorage values string format me leta hai aur hum todos ka array pass kar rahe hai thatswhy we are using " JSON.stringfy" */
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoContextProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/*Loop and Add TodoItem here */}
              {todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <TodoItems todo={todo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
