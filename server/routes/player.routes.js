const express = require("express");
const db = require("../db.js");

const router = express.Router();

router.get("/players", async (req, res) => {
  try {
    const players = await db.select("*").from("players");
    res.send(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/players/:id", async (req, res) => {
  try {
    const player = await db.select("*").from("players").where('id', req.params.id);
    res.send(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/players", async (req, res) => {
  try {
    const player = req.body;
    await db('players').insert(player)
    res.send(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
