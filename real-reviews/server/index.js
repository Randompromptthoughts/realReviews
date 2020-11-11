require('dotenv').config();

const massive = require('massive');
const session = require('express-session');
const express = require('express');
const axios = require('axios');
const authController = require('./authController');
const postController = require('./postController');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: {maxAge: 1000 * 60 * 60 * 24}
}));

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set('db', db)
  console.log('db connected')
});

//Auth Endpoints
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);
app.get('/api/logout', authController.logout);

//Post Endpoints

app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));