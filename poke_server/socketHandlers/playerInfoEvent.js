import { Player } from "../models/playerModel.js";
import { Room } from "../models/roomModel.js";
let myRoom = new Room("billlskjdf");
export const playerInfoEvent = (playerId, name) => {
  console.log(`player with ${playerId} named ${name}`);
  let player = new Player(playerId, name);
  myRoom.addPlayer(player);
  console.log(myRoom.players);
  console.log(myRoom.players.length);
};
