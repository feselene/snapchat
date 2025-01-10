const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Signup endpoint
app.post('/api/signup', async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *',
            [email, username, password]
        );
        res.status(201).json({ message: 'User created successfully', user: result.rows[0] });
    } catch (error) {
        console.error(error);
        if (error.code === '23505') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Server error' });
        }
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
