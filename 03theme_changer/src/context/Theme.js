// ***** single file me hum context ko set kar sakte hai ,this is better approach in production level.

import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  //**** hum yaha context me variable aur methods bhi de sakte hai  */
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// **** we can create a custom hook also , jisse hame 2 baar import na karna pade
export default function useTheme(){
    return useContext(ThemeContext)
}