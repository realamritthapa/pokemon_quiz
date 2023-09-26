import { Server } from "socket.io";
import { connectionHandler } from "../socketHandlers/connectionHandler.js";
export const makeServer = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "https://onlinepokequiz.web.app",
      methods: ["GET", "POST"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    connectionHandler(socket, io);
  });
};
