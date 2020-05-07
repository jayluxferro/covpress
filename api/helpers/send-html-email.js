const nodemailer = require('nodemailer');
require('format-unicorn');

module.exports = {
  friendlyName: 'Send Email',
  description: 'Send an email',
  inputs: {
    fullname: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    subject: {
      type: 'string',
      required: true,
    },
    html:{
      type: 'string',
      required: true
    }
  },
  fn: async function(inputs, exits)
  {
    var subject = inputs.subject.trim();

    // Create a SMTP transporter object
    let transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.sperixlabs_email,
        pass: process.env.sperixlabs_email_pwd
      }
    });

    // Message object
    let message = {
      from: `${inputs.fullname} <${inputs.email}>`,
      to: `${sails.config.custom.internalEmailAddress}`,
      subject: subject,
      html: inputs.html
    };

    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err);
        return exits.success(false);
      }
      return exits.success(true);
    });

  }
};
