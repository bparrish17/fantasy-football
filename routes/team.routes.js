const express = require("express");
const db = require("../db.js");

const router = express.Router();

router.get("/teams", async (req, res) => {
  try {
    const teams = await db.select("*").from("teams");
    res.send(teams);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/teams/:id", async (req, res) => {
  try {
    const team = await db.select("*").from("teams").where('id', req.params.id);
    res.send(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/teams", async (req, res) => {
  try {
    const team = req.body;
    await db('teams').insert(team)
    res.send(team);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
