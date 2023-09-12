import { Server } from "socket.io";
import { playerJoinedEvent } from "../socketHandlers/playerJoinedEvent.js";
export const makeServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", (arg) => {
      try {
        playerJoinedEvent(socket.id, arg);
        socket.emit("room", "you have joined a room");
      } catch (e) {
        console.log(e);
      }
    });
  });
};
