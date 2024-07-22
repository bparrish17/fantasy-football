const express = require("express");
const app = express();
const port = 3000;

const playerRouter = require("./routes/player.routes.js");
const teamRouter = require('./routes/team.routes.js')

app.use(express.json());

app.use(playerRouter);
app.use(teamRouter);

app.listen(port, () => {
  console.log(`App listening on port:${port}`);
});