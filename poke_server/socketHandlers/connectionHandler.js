import { playerJoinHandler } from "./playJoinHandler.js";
import { messageHandler } from "./messageHandler.js";
import { disconnectHandler } from "./disconnectHandler.js";
export const connectionHandler = (socket, io) => {
  socket.on("join", (userName) => playerJoinHandler(io, socket, userName));
  socket.on("message", (data) => messageHandler(socket, data, io));
  socket.on("disconnect", () => disconnectHandler(io,socket.id));
};
