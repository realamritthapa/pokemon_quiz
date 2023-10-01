import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { makeServer } from "./utils/socket.js";
import pokemondata from "./routes/pokemonData.js";
import { RoomsManager } from "./models/roomManager.js";
const corsOptions = {
  origin: ["https://onlinepokequiz.web.app", "http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const app = express();
const Port = process.env.PORT || 3000;
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello world");
});
// let roomManager = new RoomsManager();
// roomManager.fillRoomWithQuestion();

app.use("/", pokemondata);
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});
