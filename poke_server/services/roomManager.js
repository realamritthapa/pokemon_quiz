import { Room } from "../models/roomModel";

export class RoomsManager {
  constructor() {
    this.rooms = {};
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
