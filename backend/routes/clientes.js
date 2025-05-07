const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: '1234',
  database: 'miapp'
});

router.post('/register', async (req, res) => {
  const { nombre, correo, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO clientes (nombre, correo, password) VALUES (?, ?, ?)', [nombre, correo, hash]);
  res.json({ msg: 'Registrado' });
});

router.post('/login', async (req, res) => {
  const { correo, password } = req.body;
  const [rows] = await pool.query('SELECT * FROM clientes WHERE correo = ?', [correo]);
  if (rows.length > 0 && await bcrypt.compare(password, rows[0].password)) {
    const token = jwt.sign({ id: rows[0].id }, 'secreto');
    res.json({ token });
  } else {
    res.status(401).json({ msg: 'Credenciales incorrectas' });
  }
});

router.get('/', async (req, res) => {
  const [clientes] = await pool.query('SELECT id, nombre, correo FROM clientes');
  res.json(clientes);
});

module.exports = router;
