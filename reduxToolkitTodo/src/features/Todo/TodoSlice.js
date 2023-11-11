import { createSlice, nanoid } from "@reduxjs/toolkit";
//****** nanoid  ek unique number genrate karke dena todo id ke liye  */
const initialState = {
  //****** humara store starting me aisa dikhega jisme ek todos ka arrays hai */
  todos: [{ id: 1, text: "Hello world" }],
};

//******* todoSlice  ek type ka reducers hi hai aur reducers matlab features */
export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      };
      //***** humare paas initial state ka ek " todos " name ka array hai jisme hum todo object ko push kar rahr rahe hai  */
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      //****   yaha hum todos arrays ko lekar usme filter method laga rahe hai jisme agar payload id hamre present array id  se match karti hai to hum use id ko chodkar baki sabhi ko ek new array me return kar denge  */
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

//******* slice and store ko bind karne ke liye hum sabhi reducers and reducers methods ko export karenge  */
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
