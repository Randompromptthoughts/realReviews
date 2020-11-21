const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const signingSecret = process.env.SESSION_SECRET;

module.exports = {
  register: async (req, res) => {
    // console.log(req.body);
    const { email, username, password } = req.body;
    const db = req.app.get('db');

    const foundUser = await db.check_user({ email })//Don't use {} brackets if using $1 placeholders*($1) instead of({email})
    if (foundUser[0]) {
      return res.status(409).send(' CONFLICT! Email already in use');
    }

    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(password, salt);
    const newUser = await db.register_user({ email, username, hash });

    let token = jwt.sign({ user_id: newUser.id }, signingSecret, { algorithm: 'HS256' });

    res.status(201).send({
      token: token,
      user: newUser
    });
  },

  login: async (req, res) => {
    // console.log(req.body)
    const { email, password } = req.body
    const db = req.app.get('db');

    const foundUser = await db.check_user({ email });
    if (!foundUser[0]) {
      return res.status(400).send('Email not in use');
    }

    const authenticated = bcrypt.compareSync(password, foundUser[0].password);
    if (!authenticated) {
      return res.status(401).send('Password is incorrect');
    }

    // clear the password so we don't send it to the client
    delete foundUser[0].password;

    let token = jwt.sign({ user_id: foundUser[0].id }, signingSecret, { algorithm: 'HS256' });
    res.send({
      token: token,
      user: foundUser[0]
    });
  }
  // logout: is no longer needed with json web tokens and is taking place in header.js
};