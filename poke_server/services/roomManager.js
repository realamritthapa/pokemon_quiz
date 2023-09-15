import { Room } from "../models/roomModel.js";

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

  playerRemoval(playerId) {
    const roomIds = this.listRooms();

    for (let roomId of roomIds) {
      this.rooms[roomId].removePlayer(playerId);
    }
  }

  getAvailableRoom() {
    const roomIds = this.listRooms();

    for (let roomId of roomIds) {
      console.log(roomId);
      if (!this.rooms[roomId].isFull()) {
        return this.rooms[roomId];
      }
    }
    return null;
  }
}
