import { playerJoinService } from "../services/playerJoinService.js";
import { roomManager } from "../services/playerJoinService.js";
export let lobbyFolks = [];
export const playerJoinHandler = async (io, socket, userName) => {
  try {
    let roomId = await playerJoinService(socket.id, userName);
    //let info = roomManager.getPlayerInformation(roomId);
    //lobbyFolks.push(info);
    socket.join(roomId);
    let players = roomManager.getPlayerInformation(roomId);
    socket.emit("socketId", socket.id);
    socket.emit("room", roomId);
    io.to(roomId).emit("lobbyStatus", players);
  } catch (e) {
    console.log(e);
  }
};
