import { roomManager } from "../services/playerJoinService.js";
export const ScoreKeeper = (playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  roomManager.score(roomId, playerId);
};
