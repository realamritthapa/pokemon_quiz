import { roomManager } from "../services/playerJoinService.js";
export const quizHandler = async (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  //await roomManager.populatePokeLibrary();
  console.log("hellob ");
  let question = await roomManager.makeQuestionLibrary();
  console.log(question);
};
