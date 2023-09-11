import { Server } from "socket.io";
import { playerInfoEvent } from "../socketHandlers/playerInfoEvent.js";
export const makeServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    socket.on("join", (arg) => {
      playerInfoEvent(socket.id, arg);
    });
    console.log("connected with " + socket.id);
  });
};
