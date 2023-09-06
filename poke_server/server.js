import express from "express";
import cors from "cors";
import { createServer } from "http";
import { v4 as makeRoomId } from "uuid";
import { makeServer } from "./utils/socket.js";
const app = express();
app.use(cors());
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
