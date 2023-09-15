import React, { useState } from "react";
import { socket } from "../../services/socket";
import { useEffect } from "react";
import "./message.css";
export default function Messages() {
  const [message, setMessage] = useState([]);
  const [mySocketId, setMySocketId] = useState(null);
  const [isSocketIdRetrieved, setIsSocketIdRetrieved] = useState(false);

  useEffect(() => {
    const handleIncomingMessage = (arg) => {
      console.log("hey bro look here");
      console.log(arg);
      setMessage((prevMessages) => [...prevMessages, arg]);
      console.log(message);
    };
    socket.on("socketId", (data) => {
      setMySocketId(data);
      setIsSocketIdRetrieved(true);
    });
    socket.on("incommingMessage", handleIncomingMessage);

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off("incommingMessage", handleIncomingMessage);
    };
  }, [mySocketId]);
  return (
    <div>
      {isSocketIdRetrieved ? (
        message.map((data, index) => (
          <div
            className={`message ${data.id === mySocketId ? "mine" : "their"}`}
          >
            {data.message}
          </div>
        ))
      ) : (
        <p>Loading messages...</p>
      )}
    </div>
  );
}
