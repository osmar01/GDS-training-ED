
const express = require('express');
const { registerRoutes } = require('./routes');

const app = express();

const cors = require('cors');
app.use(cors());

app.use(express.json());

registerRoutes(app)

module.exports = app