import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

//****** for sending data to the context  */
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // ------ useContext hook ki sahayata se hi hum Apne store UserContext ko access kar sakte hai ./
  const { setUser } = useContext(UserContext); //** setUser ki madad se hum context me data bhej sakte hai   */

  const handleSubmit = (e) => {
    e.preventDefault(); //**** value url ke through kahi jaye na iskeliy preventDefault */
    setUser({ username, password }); //****  hum deta bhej rahe hai through context */
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />
        {' '}

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Password"
      />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
