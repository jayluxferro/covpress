module.exports = {
    friendlyName: 'CMS Logout',
    inputs: {
       
    },
    exits: {

    },
    fn: async function(inputs, exits){
       delete this.req.session.user
       delete this.req.session.userId
       delete this.req.session.verified
       return this.res.redirect('/auth/login')
    }
}
