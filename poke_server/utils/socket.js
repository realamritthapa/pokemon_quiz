import { Server } from "socket.io";
import { connectionHandler } from "../socketHandlers/connectionHandler.js";
export const makeServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
    },
  });

  io.on("connection", (socket) => {
    connectionHandler(socket, io);
  });
};
