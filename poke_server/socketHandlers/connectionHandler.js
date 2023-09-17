import { playerJoinHandler } from "./playerJoinHandler.js";
import { messageHandler } from "./messageHandler.js";
import { disconnectHandler } from "./disconnectHandler.js";
export const connectionHandler = (socket, io) => {
  socket.on("join", (userName) => playerJoinHandler(socket, userName));
  socket.on("message", (data) => messageHandler(socket, data, io));
  socket.on("disconnect", () => disconnectHandler(socket.id));
};
