import Welcome from "./component/welcome_page/Welcome";
import { useState } from "react";
//const { io } = require("socket.io-client");
import { io } from "socket.io-client";

import "./App.css";

function App() {
  const socket = io("http://localhost:8000");
  const [userName, setUserName] = useState("");
  console.log(userName);
  return <Welcome setName={setUserName} />;
}

export default App;
