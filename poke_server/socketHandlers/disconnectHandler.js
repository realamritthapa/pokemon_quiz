import { roomManager } from "../services/playerJoinService.js";

export const disconnectHandler = (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  roomManager.playerRemoval(playerId);
  if (roomId) {
    roomManager.resetRoom(roomId);
    let players = roomManager.getPlayerInformation(roomId);
    io.to(roomId).emit("lobbyStatus", players);
  } else {
    console.log("no room id");
  }
};
