//import { Room } from "../models/roomModel.js";

export class RoomsManager {
  constructor() {
    this.rooms = {}; //dictionary
  }

  createRoom(roomId) {
    const newRoom = new Room(roomId);
    this.rooms[roomId] = newRoom;
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
}
