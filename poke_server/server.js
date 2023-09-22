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
function generateQuestionNumbers() {
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
  return questions;
}

const question = generateQuestionNumbers();

async function makeQuestionLib() {
  let questions = generateQuestionNumbers();

  let questionLib = [];
  let question = { img: null, options: null, correctAnswer: null };
  for (let data of questions) {
    for (let num of data.options) {
      console.log(num);
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      let data = await response.json();
      console.log(data);
    }
  }
}
async function library() {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1270`);
  let data = await response.json();
  console.log(data.results);
}
library();
app.use("/", pokemondata);
const httpServer = createServer(app);
makeServer(httpServer);
httpServer.listen(Port, () => {
  console.log("Server is listening on port " + Port);
});
