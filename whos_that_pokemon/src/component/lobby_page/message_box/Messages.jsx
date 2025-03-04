import React, { useState } from "react";
import { socket } from "../../../services/socket";
import { useEffect } from "react";
import "./message.css";

export default function Messages() {
  const [message, setMessage] = useState([]);
  const [mySocketId, setMySocketId] = useState(null);
  const [isSocketIdRetrieved, setIsSocketIdRetrieved] = useState(false);

  useEffect(() => {
    const handleIncomingMessage = (arg) => {
      setMessage((prevMessages) => [...prevMessages, arg]);
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
  }, []);
  useEffect(() => {}, [message]);
  return (
    <div>
      {isSocketIdRetrieved ? (
        message.map((data, index) => (
          <div
            key={index}
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
