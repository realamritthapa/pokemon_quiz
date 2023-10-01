import { io } from "socket.io-client";

//const backendUrl = "https://poke-quiz-backend.onrender.com";
const backendUrl = "http://localhost:8000";
export const socket = io(backendUrl, { withCredentials: true });
