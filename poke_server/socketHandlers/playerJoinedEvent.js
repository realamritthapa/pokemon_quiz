import { Player } from "../models/playerModel.js";
import { RoomsManager } from "../services/roomManager.js";
import { v4 as uuidv4 } from "uuid";
let roomManager = new RoomsManager();
export const playerJoinedEvent = (playerId, name) => {
  if (name !== "") {
    let player = new Player(playerId, name);
    let room = roomManager.createRoom(uuidv4());
    room.addPlayer(player);
    console.log(room);
    return room.id;
  } else {
    throw new Error("you cant join");
  }

  //console.log(`player with ${playerId} named ${name}`);
};
