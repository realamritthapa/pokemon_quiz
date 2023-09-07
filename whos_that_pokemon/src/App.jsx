import Welcome from "./component/welcome_page/Welcome";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    const socket = io("http://localhost:8000");
    socket.emit("bro", "my name is " + userName);
    console.log(userName);
  }, [userName]);

  return <Welcome setName={setUserName} />;
}

export default App;
