import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello friends lets learn context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
};

export default App;
