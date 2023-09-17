import { Player } from "../models/playerModel.js";
import { RoomsManager } from "../models/roomManager.js";
import { v4 as uuidv4 } from "uuid";
import { getPokemonPic } from "./getPokemonPic.js";
export let roomManager = new RoomsManager();
export const playerJoinService = async (playerId, name) => {
  if (name !== "") {
    let pokePic = await getPokemonPic();
    let roomId = uuidv4();
    let player = new Player(playerId, name, pokePic);
    let room = roomManager.createRoom(roomId);
    room.addPlayer(player);

    return room.id;
  } else {
    throw new Error("you cant join");
  }

  //console.log(`player with ${playerId} named ${name}`);
};
