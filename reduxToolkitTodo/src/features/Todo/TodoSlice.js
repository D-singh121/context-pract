import { createSlice, nanoid } from "react-redux";
//****** nanoid  ek unique number genrate karke dena todo id ke liye  */
const initialState = {
  //****** humara store starting me aisa dikhega jisme ek toddos ka arrays hai */
  todos: [{ id: 1, text: "Hello world" }],
};


//******* todoSlice  ek type ka reducers hi hai aur reducers matlab features */
export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {}

});
