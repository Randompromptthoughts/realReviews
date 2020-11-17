module.exports = {
  createPost: (req, res) => {
    console.log(req.session)
    const author_id = req.session.user.id;
    const { content } = req.body;
    const db = req.app.get('db');

    db.create_post(content, author_id)
    .then(() => res.sendStatus(200))
    .catch(err => {
      res.status(500).send('Post did not save')
      console.log(err);
    });
  },

  getUserPost: (req, res) => {
    const { id } = req.session.user;
    const db = req.app.get('db');
    db.get_user_posts(id)
    .then(posts => res.status(200).send(posts))
    .catch(err => {
      res.status(500).send(err);
      console.log(err);
    });
  },

  deletePost: (req, res) => {
    const { id } = req.params;
    const db = req.app.get('db');

    db.delete_post(id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
  },

  updatePost: (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const db = req.app.get('db')

    db.update_post({content, id})
    .then(post => res.status(200).send(post))
    .catch(err => console.log(err));
  }
}