module.exports = function (app, db) {
  app.post("/create", async (req, res) => {
    const payload = JSON.parse(req.body.value);
    console.log(payload);
    try {
      await db.collection("myCollection").insertMany(payload);
    } catch (e) {
      console.log("error in /create", e);
      res.send("Sorry");
    }
    res.send("yep");
  });
  app.get("/read/:id", (req, res) => {
    const details = { id: req.params.id };
    try {
      db.collection("myCollection").findOne(details, (err, item) => {
        res.send(item);
      });
    } catch (e) {
      console.log("error in /read/:id", e);
      res.send("Sorry");
    }
  });
  app.get("/remove/:id", (req, res) => {
    const details = { id: req.params.id };
    try {
      db.collection("myCollection").remove(details, (err, item) => {
        res.send(`Item ${item} deleted`);
      });
    } catch (e) {
      console.log("error in /remove/:id", e);
      res.send("Sorry");
    }
  });
};
