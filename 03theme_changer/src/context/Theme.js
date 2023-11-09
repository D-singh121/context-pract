import React, { useContext, createContext } from "react";

const themeContext = React.createContext({
   //**** hum yaha context me variable aur methods bhi de sakte hai  */
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},

})


export default themeContext;