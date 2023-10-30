import { roomManager } from "../services/playerJoinService.js";

export const readyHandler = (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  if (roomManager.playerReady(playerId)) {
    let players = roomManager.getPlayerInformation(roomId);
    let gameState = roomManager.readyRoom(roomId);
    // let question = roomManager.fillRoomWithQuestion();
    let roomReady = gameState === "ready" ? true : false;
    io.to(roomId).emit("lobbyStatus", players);
    if (roomReady) {
      io.to(roomId).emit("roomReady", roomReady);
    }
  }
};
