const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const { Client } = require('pg');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL client configuration
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Use your external database URL here
  ssl: { rejectUnauthorized: false },
});

client
  .connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((error) => {
    console.error('Failed to connect to PostgreSQL:', error.message);
    console.error(error.stack);
  });

app.post('/api/auth/signup', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const query = 'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *';
    const values = [email, username, password];
    const result = await client.query(query, values);
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
