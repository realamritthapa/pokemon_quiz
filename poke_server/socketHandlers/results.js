import { roomManager } from "../services/playerJoinService.js";
export const Results = (playerId, io) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  let players = roomManager.getPlayerInformation(roomId);
  players.sort((a, b) => {
    return b.score - a.score;
  });
  if (players) {
    setTimeout(() => {
      io.to(roomId).emit("allScores", players);
    }, 2000);
  }
};
