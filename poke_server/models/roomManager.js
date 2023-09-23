import { Room } from "./roomModel.js";

export class RoomsManager {
  constructor() {
    this.rooms = {}; //dictionary
    this.pokeLibrary = null;
    this.populatePokeLibrary();
  }

  generateRandomNumberGroups() {
    let arr = [];
    let list = [];
    for (let i = 0; i < 10; ++i) {
      for (let j = 0; j < 4; ++j) {
        let num = Math.floor(Math.random() * 1250) + 1;
        list.push(num);
      }
      arr.push(list);
      list = [];
    }
    return arr;
  }

  generateOptionCorrectAnswer() {
    let questionArr = this.generateRandomNumberGroups();
    let questions = [];
    let lastNum = null;
    let num = null;
    for (let i = 0; i < 10; ++i) {
      let question = { correct: null, options: null };
      do {
        num = Math.floor(Math.random() * 4);
      } while (num === lastNum);
      lastNum = num;
      question.correct = questionArr[i][num];
      question.options = questionArr[i];
      questions.push(question);
    }
    return questions;
  }

  async makeQuestionLibrary() {
    let questions = this.generateOptionCorrectAnswer();

    let questionLibrary = [];
    let question = { img: null, options: null, correctAnswer: null };
    for (let data of questions) {
      let url = this.pokeLibrary[data.correct].url;
      let response = await fetch(url);
      let info = await response.json();
      console.log(info.name);
    }
  }

  async populatePokeLibrary() {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=1270`
      );
      const data = await response.json();
      this.pokeLibrary = data.results;
    } catch (error) {
      console.error("Error fetching the data:", error);
    }
  }

  createRoom(roomId) {
    const availableRoom = this.getAvailableRoom();

    if (availableRoom) {
      return availableRoom;
    }

    const newRoom = new Room(roomId);
    this.rooms[roomId] = newRoom;
    return newRoom;
  }

  getRoom(roomId) {
    return this.rooms[roomId];
  }

  deleteRoom(roomId) {
    delete this.rooms[roomId];
  }

  listRooms() {
    return Object.keys(this.rooms);
  }

  getPlayersRoomId(playerId) {
    const roomIds = this.listRooms();
    let info;
    for (let roomid of roomIds) {
      let roomInfo = this.rooms[roomid].getRoomId(playerId);
      if (roomInfo) {
        return roomInfo;
      }
    }
    return null;
  }

  getPlayerInformation(roomId) {
    return this.rooms[roomId].players;
  }

  playerRemoval(playerId) {
    const roomIds = this.listRooms();

    for (let roomId of roomIds) {
      this.rooms[roomId].removePlayer(playerId);
    }
  }

  getAvailableRoom() {
    const roomIds = this.listRooms();

    for (let roomId of roomIds) {
      if (!this.rooms[roomId].isFull()) {
        return this.rooms[roomId];
      }
    }
    return null;
  }

  playerReady(playerId) {
    const roomIds = this.listRooms();

    for (let roomId of roomIds) {
      return this.rooms[roomId].setPlayerReady(playerId);
    }
    return null;
  }

  readyRoom(roomId) {
    return this.rooms[roomId].gameState;
  }

  resetRoom(roomId) {
    console.log("resetting room");
    return this.rooms[roomId].setGameState();
  }
}
