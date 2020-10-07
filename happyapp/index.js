const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Happy Server!");
});

app.listen(port, () => {
  console.log(`Todo app listening at http://localhost:${port}`);
});
