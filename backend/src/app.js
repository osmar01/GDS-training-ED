
require('dotenv').config();
const cors = require('cors');
const express = require('express');

const { registerRoutes } = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

registerRoutes(app)

module.exports = app