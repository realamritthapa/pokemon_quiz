import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { makeServer } from "./utils/socket.js";
import pokemondata from "./routes/pokemonData.js";
import { getPokemonPic } from "./services/getPokemonPic.js";
import { RoomsManager } from "./models/roomManager.js";

const app = express();
const Port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
function generateRandomNumberGroups() {
  let arr = [];
  let list = [];
  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 4; ++j) {
      let num = Math.floor(Math.random() * 1250) + 1;
      list.push(num);
    }
    arr.push(list);
    list = [];
  }
  return arr;
}
function generateOptionCorrectAnswer() {
  let questionArr = generateRandomNumberGroups();
  let questions = [];
  let lastNum = null;
  let num = null;
  for (let i = 0; i < 10; ++i) {
    let question = { correct: null, options: null };
    do {
      num = Math.floor(Math.random() * 4);
    } while (num === lastNum);
    lastNum = num;
    question.correct = questionArr[i][num];
    question.options = questionArr[i];
    questions.push(question);
  }
  return questions;
}

async function makeQuestionLibrary() {
  let questions = generateOptionCorrectAnswer();

  let questionLib = [];
  let question = { img: null, options: null, correctAnswer: null };
  console.log(questions);
}
let roomManager = new RoomsManager();

let question = await roomManager.makeQuestionLibrary();
console.log(question);
console.log("heyyyyy");
// setTimeout(() => {
//   roomManager.makeQuestionLibrary();
// }, 5000);
app.use("/", pokemondata);
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});
