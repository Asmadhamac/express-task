const Express = require("express");
let app = Express();

app.use(Express.json());

app.get("/search", (req, res) => {
  console.log(req.query.search);
  res.status(200).json({
    message: "Found user",
  });
});

app.post("/save", (req, res) => {
  console.log(req.body);
  if (req.body.username == "" || req.body.password == "")
    res.status(402).json({
      message: "username or password can't be empty",
    });
  res.status(200).json({ message: "user created" });
});

app.put("/put", (req, res) => {
  console.log(req.body);
  res.status(202).json({
    message: "username has been changed",
  });
});

app.delete("/delete", (req, res) => {
  //   console.log(req.query);
  if (req.query.id == "")
    res.status(404).json({
      message: "id can't be empty",
    });
  res.status(401).json({ message: "user deleted" });
});

const port = 8006;

app.listen(port, () => {
  console.log("listening on port 8006");
});
