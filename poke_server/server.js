import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { createServer } from "http";
import { makeServer } from "./utils/socket.js";
import pokemondata from "./routes/pokemonData.js";
import { getPokemonPic } from "./services/getPokemonPic.js";

const app = express();
const Port = process.env.PORT || 3000;
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});
function generateQuestionArray() {
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
function generateQuestion() {
  let questionArr = generateQuestionArray();
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
  console.log(questions);
}
function timeTaken(func) {
  let start = performance.now();
  func();
  let end = performance.now();
  let time = end - start;
  console.log(`Function took ${time} milliseconds.`);
}
timeTaken(generateQuestion);
app.use("/", pokemondata);
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});
