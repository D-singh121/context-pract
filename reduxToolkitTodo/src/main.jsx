import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { myStore } from "./appStore/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  //******* here store is a prop name and "myStore" is the main state store name  */
  <Provider store={myStore}>
    <App />
  </Provider>
);
