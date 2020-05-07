module.exports = {
  friendlyName: 'Active Session',
  inputs: {

  },
  exits: {
    success: {
      status: true
    }
  },
  fn: async function(inputs, exits){
    this.req.session.websiteActive = true
    return exits.success({ status: true })
  }
}
