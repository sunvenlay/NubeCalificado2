const express = require('express');
const router = express.Router();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'miapp'
});

router.get('/', async (req, res) => {
  const [productos] = await pool.query('SELECT * FROM productos');
  res.json(productos);
});

module.exports = router;
