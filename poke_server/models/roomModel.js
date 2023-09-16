//import { Player } from "./playerModel";

export class Room {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.currentQuestion = 0;
    this.gameState = "waiting";
    this.questions = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  isFull() {
    return this.players.length > 2;
  }

  removePlayer(playerId) {
    this.players = this.players.filter((player) => player.id !== playerId);
  }

  getCurrentQuestion() {
    let question = this.questions[this.currentQuestion];
    this.currentQuestion = this.currentQuestion + 1;
    return question;
  }

  addQuestion(question) {
    this.questions.push(question);
  }
}
