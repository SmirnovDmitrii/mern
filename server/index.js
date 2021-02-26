const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const db = require("./config/db");

const App = express();
const port = 8000;

App.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  const db = database.db("scrap");
  require("./routes")(App, db);
  App.listen(port, () => console.log(`We are live on ${port} port`));
});
