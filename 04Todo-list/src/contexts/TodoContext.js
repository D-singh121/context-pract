import { useContext, createContext } from "react";

export const TodoContext = createContext({
  // properties
  todos: [
    {
      id: 1,
      todo: "Msg",
      completed: false,
    },
  ],
  // Functionality with no defination;
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

// ***** we are making the coustum hooks for code reuseability.

export const useTodo = () => {
  return useContext(TodoContext);
};
