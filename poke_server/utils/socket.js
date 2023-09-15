import { Server } from "socket.io";
import { playerJoinedEvent } from "../socketHandlers/playerJoinedEvent.js";
import { playerLeftEvent } from "../socketHandlers/playerLeftEvent.js";
export const makeServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    //console.log(socket);
    socket.on("join", (arg) => {
      try {
        let roomId = playerJoinedEvent(socket.id, arg);
        console.log(roomId);
        socket.join(roomId);
        socket.emit("socketId", socket.id);
        socket.emit("room", roomId);
      } catch (e) {
        console.log(e);
      }
    });

    socket.on("message", (data, messageToSend) => {
      let info = {
        id: socket.id,
        message: messageToSend,
      };
      io.to(data).emit("incommingMessage", info);
    });
    socket.on("disconnect", () => {
      console.log(`${socket.id} had left`);
      playerLeftEvent(socket.id);
    });
  });
};
