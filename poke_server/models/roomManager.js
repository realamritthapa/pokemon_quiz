import { Room } from "./roomModel.js";

export class RoomsManager {
  constructor() {
    this.rooms = {}; //dictionary
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
