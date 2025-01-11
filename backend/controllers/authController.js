const pool = require('../config/db');

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const query = `
      INSERT INTO users (email, username, password)
      VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [email, username, password];

    const result = await pool.query(query, values);
    res.status(201).json({ message: 'User created', user: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = { signup };
