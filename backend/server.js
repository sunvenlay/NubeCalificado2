const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientes = require('./routes/clientes');
const productos = require('./routes/productos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/clientes', clientes);
app.use('/api/productos', productos);

const PORT = 8000;
app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
