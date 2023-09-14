import Welcome from "./component/welcome_page/Welcome";
import { useEffect, useState } from "react";
import { socket } from "./services/socket.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatBox from "./component/lobby_page/chatBox";

function App() {
  const [userName, setUserName] = useState("");
  const [roomId, setRoomID] = useState(null);
  useEffect(() => {
    const handleJoinRoom = (roomid) => {
      setRoomID(roomid);
    };

    socket.on("room", handleJoinRoom);

    return () => {
      socket.off("room", handleJoinRoom);
    };
  }, []);

  useEffect(() => {
    if (userName) {
      socket.emit("join", userName);
    }
  }, [userName]);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome setName={setUserName} />}></Route>
        <Route path='/lobby' element={<ChatBox data={roomId} />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
