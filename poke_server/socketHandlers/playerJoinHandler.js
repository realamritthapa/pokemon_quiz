import { playerJoinService } from "../services/playerJoinService.js";

export const playerJoinHandler = (socket, userName) => {
  try {
    let roomId = playerJoinService(socket.id, userName);
    socket.join(roomId);
    socket.emit("socketId", socket.id);
    socket.emit("room", roomId);
  } catch (e) {
    console.log(e);
  }
};
