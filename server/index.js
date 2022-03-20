require("dotenv").config();
const connection = require('./db');

const express = require('express');
const app = express();
const { API_PORT } = process.env;

connection()

app.use(express.json({extended: true}))

const port = process.env.PORT || API_PORT;
app.listen(port, ()=> console.log(`Server running at ${port}`))