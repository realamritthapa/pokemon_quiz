import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { v4 as makeRoomId } from "uuid";
import { makeServer } from "./utils/socket.js";
import pokemondata from "./routes/pokemonData.js";
const app = express();
const Port = process.env.PORT || 3000;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use("/", pokemondata);
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});
