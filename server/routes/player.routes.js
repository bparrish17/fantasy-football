const express = require("express");
const db = require("../db.js");

const router = express.Router();

router.post("/players/search", async (req, res) => {
  try {
    const { page, pageSize, sortDir, sort, position } = req?.body;
    const players = await db
      .select(['players.*','teams.bye_week'])
      .from("players")
      .leftJoin('teams', 'players.team_id', '=', 'teams.id')
      .orderByRaw(`${sort ?? 'id'} ${sortDir ?? "asc"} NULLS LAST`)
      .limit(pageSize ?? 100)
      .offset((page - 1) * pageSize ?? 0)
      .modify((qb) => {
        if (position) {
          qb.whereIn('position', position)
        }
      })

    res.send(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/players", async (req, res) => {
  try {
    const players = await db.select('*').from("players").orderBy('id', 'asc')
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/players/:id", async (req, res) => {
  try {
    const player = await db
      .select("*")
      .from("players")
      .where("id", req.params.id);
    res.send(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/players", async (req, res) => {
  try {
    const player = req.body;
    await db("players").insert(player);
    res.send(player);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
