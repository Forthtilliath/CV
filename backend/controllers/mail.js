const nodemailer = require('nodemailer');

exports.send = (req, res) => {
   // const transporter = nodemailer.createTransport({
   //    service: 'gmail',
   //    auth: {
   //       user: process.env.GMAIL_USER,
   //       pass: process.env.GMAIL_PASS,
   //    },
   // });
   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
         user: process.env.ETHER_USER,
         pass: process.env.ETHER_PASS,
      },
   });
   const mailOptions = {
      from: `${req.body.name} <${req.body.email}>`,
      to: `Forth <${process.env.SEND_TO}>`,
      subject: 'CV : Message from ' + req.body.name,
      text: `Email : ${req.body.email}\nMessage :\n${req.body.message}`,
   };
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log(error);
         res.status(400).json({ errors: error });
      } else {
         console.log('Email sent: ' + info.response);
         res.status(200).json({ result: 'success' });
      }
   });
};
