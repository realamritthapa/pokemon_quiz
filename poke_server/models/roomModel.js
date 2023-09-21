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
    return this.players.length > 1;
  }

  removePlayer(playerId) {
    this.players = this.players.filter((player) => player.id !== playerId);
  }

  getRoomId(playerId) {
    for (let player of this.players) {
      if (player.id === playerId) {
        return this.id;
      }
    }
    return null;
  }

  isRoomReady() {
    let ready = 0;
    if (this.isFull()) {
      for (let player of this.players) {
        if (player.ready === true) {
          ready += 1;
        }
      }
    }
    if (ready === this.players.length) {
      return true;
    }
    return false;
  }
  // getPlayerInfo(playerId) {
  //   let info;
  //   for (let player of this.players) {
  //     if (player.id === playerId) {
  //       info = player.getBasicInfo();
  //     } else {
  //       info = null;
  //     }
  //   }
  //   return info;
  // }

  getPlayerInfo(roomId) {
    if (this.roomId === roomId) {
      return this.players;
    } else {
      return null;
    }
  }

  getCurrentQuestion() {
    let question = this.questions[this.currentQuestion];
    this.currentQuestion = this.currentQuestion + 1;
    return question;
  }

  addQuestion(question) {
    this.questions.push(question);
  }

  setPlayerReady(playerId) {
    for (let player of this.players) {
      if (player.id === playerId) {
        if (player.setReady()) {
          if (this.isRoomReady()) {
            this.gameState = "ready";
          }
          return true;
        }
      }
    }
    return null;
  }

  setGameState() {
    console.log(
      "this is in the room",
      this.gameState,
      this.players.length,
      !this.isFull
    );

    if (this.players.length < 1 && this.gameState == "ready") {
      this.gameState = "waiting";
      console.log("This is a room", this.gameState);
    }
    return true;
  }
}
