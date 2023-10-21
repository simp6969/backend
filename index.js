//importuud

import getRandomFox from "random-fox-img";
import getRandomCat from "random-cat-img";
import express from "express";
import fs from "fs";

//servere ehlulh
const app = express();

//json unshdag blghq bol ajlq
app.use(express.json());

//nextiin usestate
let response = "";
let response2 = "";

//muur bol unegnii zurg fetchlh
getRandomFox().then((data) => (response = data.message));
getRandomCat().then((data) => (response2 = data.message));

//beldsn data
const users = [
  { name: "bat", age: 69 },
  { name: "bold", age: 14 },
  { name: "hulgaic", age: 10 },
];

//backend

app.get("/user/:name", function (req, res) {
  res.status(269);
  res.setHeader("Access-Control-Allow-Origin", "*");
  let { name } = req.params;
  const newArr = users.filter((element) => element.name === name);
  res.json(newArr[0]);
});
app.get("/user", function (req, res) {
  res.status(269);
  res.setHeader("Access-Control-Allow-Origin", "*");
  //read stream server.jsono negd dotrn ymr neg data bicq bol  postman hariua ughq gd alda zan
  const ReadStream = fs.createReadStream("./server.json", "utf-8");

  //jsonig chunk chunkaarn unshd response blgn
  ReadStream.on("data", (chunk) => {
    res.send(chunk);
  });
});
app.get("/", function (req, res) {
  res.status(269);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json({ image1: response, image2: response2, method: req.method });
});

app.post("/user", function (req, res) {
  res.status(269);
  res.setHeader("Access-Control-Allow-Origin", "*");
  users.push(req.body);
  res.json(users);
  const writeStream = fs.createWriteStream("./server.json");

  //json.stringifyg ashiglhq bol array hullen avdqm bnlll
  writeStream.write(JSON.stringify(users));
  writeStream.end();
});

//http://localhost:8080
app.listen(8080);
