module.exports = {
    friendlyName: 'CMS Verification Page',
    inputs: {
    
    },
    exits: {

    },
    fn: async function(inputs, exits){
      if(this.req.session.verified === undefined)
        return this.res.unauthorizedAdmin()

      return this.res.view('pages/auth/verify', {
        layout: 'layouts/auth/index'
      })
    }
}
