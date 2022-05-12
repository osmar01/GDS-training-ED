
require('dotenv').config({ path: './.env' })
const express = require('express');
const { registerRoutes } = require('./routes');

const app = express();

console.log(process.env.NAME);
app.use(cors());

app.use(express.json());

registerRoutes(app)

module.exports = app