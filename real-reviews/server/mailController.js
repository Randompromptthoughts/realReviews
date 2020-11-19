// const nodemailer = require('nodemailer')
// const { EMAIL, PASSWORD } = process.env;

// module.exports = {
//   email: async (req, res) => {
//     try {
//       let transporter = nodemailer.createTransport({
//         host: 'realreviews.realgamers.yahoo.com',
//         port: 8888,
//         service: 'yahoo',
//         secure: false,
//         auth: {
//           user: EMAIL,
//           pass: PASSWORD
//         }
//       });

//       let info = await transporter.sendMail({
//         from: `Dakota Locke <${EMAIL}>`, 
//         to: '',
//         subject: 'Welcome',
//         text: 'Welcome to Real Reviews Real Gamers',
//         html: `<div> </div>`

//       })
//     }
//  }
// }

