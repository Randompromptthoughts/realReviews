require('dotenv').config();

const massive = require('massive');
const express = require('express');
const axios = require('axios');
const authController = require('./authController');
const postController = require('./postController');

const app = express();

app.use(express.json());

app.listen(8888, () => console.log('Server is running on port 8888'));