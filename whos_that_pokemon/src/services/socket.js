import { io } from "socket.io-client";

const backendUrl = "https://poke-quiz-backend.onrender.com";
export const socket = io(backendUrl, { withCredentials: true });
