import { Player } from "../models/playerModel.js";
import { RoomsManager } from "../models/roomManager.js";
import { v4 as uuidv4 } from "uuid";
import { getPokemonPic } from "./getPokemonPic.js";
export const roomManager = new RoomsManager();

export const playerJoinService = async (playerId, name) => {
  if (name !== "") {
    //let pokePic = await getPokemonPic();
    let pokePic = await roomManager.getRandomPoke();
    let roomId = uuidv4();
    let player = new Player(playerId, name, pokePic);
    let room = roomManager.createRoom(roomId);
    room.addPlayer(player);
    //let info = roomManager.getPlayerInformation(playerId);
    //console.log(info);

    return room.id;
  } else {
    throw new Error("you cant join");
  }

  //console.log(`player with ${playerId} named ${name}`);
};
