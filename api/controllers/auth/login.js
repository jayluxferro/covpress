module.exports = {
    friendlyName: 'CMS Log In',
    inputs: {

    },
    exits: {

    },
    fn: async function(inputs, exits){
      this.req.session.verified = false
      return this.res.view('pages/auth/login', {
        layout: 'layouts/auth/index',
        clientId: process.env.JDL_ZOHO_CLIENT_ID,
        redirectURI: process.env.JDL_AUTH_CALLBACK_URI
      })
    }
}
