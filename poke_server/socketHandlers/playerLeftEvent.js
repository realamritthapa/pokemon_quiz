import { Player } from "../models/playerModel.js";
import { v4 as uuidv4 } from "uuid";
import { roomManager } from "./playerJoinedEvent.js";

export const playerLeftEvent = (playerId) => {
  roomManager.playerRemoval(playerId);
};
