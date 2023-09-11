import Welcome from "./component/welcome_page/Welcome";
import { useEffect, useState } from "react";
import { socket } from "./services/socket.js";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    socket.emit("join", userName);
  }, [userName]);

  return <Welcome setName={setUserName} />;
}

export default App;
