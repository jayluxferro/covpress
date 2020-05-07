module.exports = {
  friendlyName: 'Request Quote',
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
    src: {
      type: 'string',
      required: true
    },
    dst: {
      type: 'string',
      required: true
    },
    shippingType: {
      type: 'string',
      required: true
    },
    date: {
      type: 'string'
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
    let status = false;
    let message = 'Process failed. Try again!';

    if(!this.req.session.websiteActive){
      return exits.success({ status, message })    
    }
    
    const mailContent = `Hi, my name is ${inputs.fullname}(${inputs.email}, ${inputs.phone}). I want a quote on <b>${inputs.shippingType}</b>, from <b>${inputs.src}</b> to <b>${inputs.dst}</b>. Date: <b>${inputs.date}</b>.<br/><br/><b>Message Content:</b> ${inputs.message}.<br/><br/><br/>`

    if(await sails.helpers.sendHtmlEmail(inputs.fullname, 'no-reply@sperixlabs.org', 'Request for Quote', mailContent)){
      status = true
      message = 'Message sent'
    }

    return exits.success({
      status,
      message
    });
  }
};
