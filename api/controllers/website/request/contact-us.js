module.exports = {
  friendlyName: 'Contact Us',
  inputs: {
    fullname: {
      type: 'string',
      required: true
    },
    phone: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    },
    company: {
      type: 'string',
      required: true
    },
    message: {
      type: 'string',
      required: true
    }
  },
  exits: {
    success: {
      status: false,
      message: ''
    }
  },
  fn: async function(inputs, exits){
    let status = false
    let message = 'Process failed. Try again!';
    
    if(!this.req.session.websiteActive){
      return exits.success({ status, message })    
    }

    const mailContent = `<b>Name of Client:</b> ${inputs.fullname}<br/> <b>Email:</b> ${inputs.email}<br/> <b>Phone Number:</b> ${inputs.phone}<br/> <b>Company:</b> ${inputs.company}<br/> <b>Message Content:</b> ${inputs.message}.<br/><br/><br/>`

    if(await sails.helpers.sendHtmlEmail(inputs.fullname, process.env.sperixlabs_email, 'A contact request from client', mailContent)){
      status = true
      message = 'Message sent'
    }

    return exits.success({
      status,
      message
    });
  }
}
