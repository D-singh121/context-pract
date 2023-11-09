import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //**** ok ,ab humara state setup ho chuka hai to hame ab actual change chahiye vo hum classic javascript se kar sakte hai using useEffect() hook. themeMode humara dependencies array hai agar uske andar kuch change hota hai to 👉 useEffect() fir se run hona chahiye */
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    //**** theme provide me hume value bhi set karni padti hai . lekin humne sirf methods (themeMode,darkTheme ,lightTheme) define kiye hai but vo karte kya hai ye define nahi kiya hai ,uske liye hum same name se function banayenge with functionality  */

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeButton */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
