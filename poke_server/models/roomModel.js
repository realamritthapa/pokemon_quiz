//import { Player } from "./playerModel";

export class Room {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.currentQuestion = null;
    this.gameState = "waiting";
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

  setCurrentQuestion(question) {
    this.currentQuestion = question;
  }
}
