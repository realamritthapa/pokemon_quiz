import { roomManager } from "../services/playerJoinService.js";
export const quizHandler = async (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  //await roomManager.populatePokeLibrary();
  let question = await roomManager.makeQuestionLibrary();
  if (question) {
    setTimeout(() => {
      io.to(roomId).emit("quizQuestions", question);
    }, 5000);
  }
};
