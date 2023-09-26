import { io } from "socket.io-client";
require("dotenv").config();
const backendUrl = process.env.POKE_SERVER_URL || "http://localhost:8000";
export const socket = io(backendUrl);
