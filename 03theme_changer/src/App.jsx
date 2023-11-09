import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeButton";

function App() {
  return (
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* themeButton */}
        <ThemeBtn/>
        </div>

        <div className="w-full max-w-sm mx-auto">
        {/* Card */}
        <Card/>
        </div>
      </div>
    </div>
  );
}

export default App;
