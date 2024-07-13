const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL database configuration
const pool = new Pool({
  user: 'brianparrish',
  host: 'localhost',
  database: 'fantasy_football',
  password: '',
  port: 5432, // default PostgreSQL port
});

// Middleware to parse JSON bodies
app.use(express.json());

// Route to get all users
app.get('/players', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM players');
    const players = result.rows;
    client.release(); // Release the client back to the pool
    res.json(players);
  } catch (err) {
    console.error('Error fetching users', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// const getPlayer = async () => {
//   const player = pg('players').first();
//   console.log('player', player)
//   return player;
// }


// console.log(player)