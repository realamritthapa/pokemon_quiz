import React, { useState } from "react";
import { socket } from "../../services/socket";
import { useEffect } from "react";
export default function Messages() {
  const [message, setMessage] = useState([]);
  const [mySocketId, setMySocketId] = useState(null);
  const [isSocketIdRetrieved, setIsSocketIdRetrieved] = useState(false);

  useEffect(() => {
    const handleIncomingMessage = (arg) => {
      console.log(arg);
      setMessage((prevMessages) => [...prevMessages, arg]);
    };
    socket.on("socketId", (data) => {
      setMySocketId(data);
      setIsSocketIdRetrieved(true);
    });
    console.log("i am in");
    console.log(mySocketId, isSocketIdRetrieved, message);
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
            key={index}
            style={{ textAlign: data.id === mySocketId ? "right" : "left" }}
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
