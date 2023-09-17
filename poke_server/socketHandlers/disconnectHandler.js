import { roomManager } from "../services/playerJoinService.js";

export const disconnectHandler = (playerId) => {
  roomManager.playerRemoval(playerId);
};
