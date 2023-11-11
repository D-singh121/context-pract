import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/TodoSlice";


//*****   configurstore apne ander ek object leta hai  */
export const myStore = configureStore({
  reducer: todoReducer,
});
