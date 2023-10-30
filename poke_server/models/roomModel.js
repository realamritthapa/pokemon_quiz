export class Room {
  constructor(id) {
    this.id = id;
    this.players = [];
    this.currentQuestion = 0;
    this.gameState = "waiting";
    this.questionSet = null;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  // adds score to the player
  addScore(playerId) {
    for (let player of this.players) {
      if (playerId === player.id) {
        player.increaseScore();
      }
    }
  }

  isFull() {
    return this.players.length > 1;
  }

  removePlayer(playerId) {
    this.players = this.players.filter((player) => player.id !== playerId);
  }

  // checks which room the player is located and returns id
  getRoomId(playerId) {
    for (let player of this.players) {
      if (player.id === playerId) {
        return this.id;
      }
    }
    return null;
  }

  //makes sure all players in room are ready before room being ready
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

  //returns eveything about the player
  getPlayerInfo(roomId) {
    if (this.roomId === roomId) {
      return this.players;
    } else {
      return null;
    }
  }

  //returns the current question but not currently being used
  getCurrentQuestion() {
    let question = this.questions[this.currentQuestion];
    this.currentQuestion = this.currentQuestion + 1;
    return question;
  }

  // also currenly not being used
  addQuestion(question) {
    this.questionSet = question;
    return this.questionSet;
  }

  // find the players and sets their state to ready
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
    if (this.players.length < 1 && this.gameState == "ready") {
      this.gameState = "waiting";
    }
    return true;
  }

  // generates 40 random numbers which will be used to
  // get the questions from the api
  generateQuestion() {
    let arr = [];
    for (let i = 0; i < 40; ++i) {
      let num = Math.floor((Math.random() + 1) * 1250); // 1250 because thats max # of pokemon in api
      arr.push(num);
    }
  }
}
