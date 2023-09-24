import { playerJoinHandler } from "./playJoinHandler.js";
import { messageHandler } from "./messageHandler.js";
import { disconnectHandler } from "./disconnectHandler.js";
import { readyHandler } from "./readyHandler.js";
import { quizHandler } from "./quizHandler.js";
export const connectionHandler = (socket, io) => {
  socket.on("join", (userName) => playerJoinHandler(io, socket, userName));
  socket.on("message", (data) => messageHandler(socket, data, io));
  socket.on("disconnect", () => disconnectHandler(io, socket.id));
  socket.on("ready", () => readyHandler(io, socket.id));
  socket.on("quizTime", () => quizHandler(io, socket.id));
};
