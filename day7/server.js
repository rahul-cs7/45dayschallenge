//mkdir day7
//cd day7
//npm init -y   got error while setting this up(Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned) pasted this command then the error resolved  again npm init -y then package.json created
// npm install express
//main file server.js
//executed node server.js
//http://localhost:3000/api to see mwssage on web

let express = require("express");

//import express
//create express app
let app = express();

//defined  simple root

app.get("/api", (req, res) => {
  res.json({ message: "API is running!" });
});

//server on port

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
