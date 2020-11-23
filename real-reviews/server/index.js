require('dotenv').config(); //require('dotenv').config()

const massive = require('massive');
const express = require('express');
const axios = require('axios');
const authController = require('./authController');
const postController = require('./postController');
const mailController = require('./mailController');
const path = require('path'); // For hosting
const jwt = require('jsonwebtoken');
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const signingSecret = process.env.SESSION_SECRET;

const app = express();

const unauthenticatedRoutes = ['/api/login', '/api/register'];

app.use(express.json());
app.set('etag', false);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(db => {
  app.set('db', db)
  console.log('db connected')
});

app.use(function(req, res, next) {
  // all responses will be in JSON
  res.type('application/json');

  // only allow login as an unauthenticated path
  if (unauthenticatedRoutes.includes(req.path)) {
    next();
    return;
  }

  // only allow option requests
  let auth = req.header("Authorization")
  if (!auth) {
    res.status(401).send("no authorization provided");
    return
  }

  let decoded = jwt.decode(auth, signingSecret);
  if (!decoded) {
    res.status(401).send("couldn't verify token");
    return
  }

  req.user_id = decoded.user_id;

  next();
});

//nodeMailer
app.post('/api/email', mailController.email);

//Auth Endpoints
app.post('/api/register', authController.register);
app.post('/api/login', authController.login);

//Post Endpoints
app.get('/api/posts', postController.getUserPost);
app.post('/api/posts', postController.createPost);
app.put('/api/post/:id', postController.updatePost);
app.delete('/api/posts/:id', postController.deletePost);



app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));