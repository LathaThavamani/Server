import express from "express";

const app = express();

let fruits = [];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/my-name", (req, res) => {
  res.send("Sagar Gavand");
});

app.get('/area-of-circle/:number', (req, res) => {
  let area = 3.14 * req.params.number * req.params.number;
  res.send(`${area.toString()}`);
});

app.get("/authenticate/:username/:password", (req, res) => {
  let username = req.params.username;
  let password = req.params.password;
  let result = (username == "Admin" && password == "123" ? "welcome" : "invalid");
  res.send(result);
});

app.get("/get-all-fruits", (req, res) => {
  res.send(`${fruits}`);
});

app.get("/add-fruit/:newFruit", (req, res) => {
  fruits.push(req.params.newFruit);
  res.send("added");
});

app.get("/fruits-starts-with/:start", (req, res) => {
  var filtered = fruits.filter(p => p.startsWith(req.params.start));
  res.send(`${filtered}`);
});

app.get("/fruits-end-with/:end", (req, res) => {
  var filtered = fruits.filter(p => p.endsWith(req.params.end));
  res.send(`${filtered}`);
});

app.get("/remove-fruit/:fruit", (req, res) => {
  var filtered = fruits.filter(p => (p != req.params.fruit));
  res.send(`${filtered}`);
});
app.listen(3001, () => {
  console.log("Serer started");
});


