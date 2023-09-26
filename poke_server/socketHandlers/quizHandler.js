import { roomManager } from "../services/playerJoinService.js";
export const quizHandler = async (io, playerId) => {
  let roomId = roomManager.getPlayersRoomId(playerId);
  //await roomManager.populatePokeLibrary();
  console.log("this is from quiz", roomId);
  let question = await roomManager.makeQuestionLibrary();
  if (question) {
    console.log("quiz question has been sent");
    console.log(question);
    setTimeout(() => {
      io.to(roomId).emit("quizQuestions", question);
    }, 5000);
  }
};
