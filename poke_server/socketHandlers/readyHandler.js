import { roomManager } from "../services/playerJoinService.js";
export const readyHandler = (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  if (roomManager.playerReady(playerId)) {
    let players = roomManager.getPlayerInformation(roomId);
    io.to(roomId).emit("lobbyStatus", players);
  }
};
