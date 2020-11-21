const nodemailer = require('nodemailer');
const { EMAIL, PASSWORD } = process.env;

module.exports = {
  email: async (req, res) => {
    const { email: userEmail } = req.body;
    console.log(userEmail)
    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        service: 'gmail',
        secure: false,
        auth: {
          user: EMAIL,
          pass: PASSWORD
        }
      });

      let info = await transporter.sendMail({
        from: `Realreviews <${EMAIL}>`,
        to: userEmail,
        subject: 'Welcome to Realreviews.Realgamers.com!',
        text: 'Welcome to Real Reviews Real Gamers',
        html: `<div> *cough* When you get your first email from RealreviewsRealgamers.com </div>
              <img src="cid:unique@nodemailer.com"/>`,

        attachments: [
          {
            filename: 'license.txt',
            path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
          },
          {
            cid: 'unique@nodemailer.com',
            path: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'
          }
        ]

      }, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          // console.log('hit the else')
          console.log(info)
          res.status(200).send(response)
        }
      })
    } catch (err) {
      console.log(err)
      res.status(500).send(err);
    }
  }
}

