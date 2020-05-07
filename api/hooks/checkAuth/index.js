module.exports = function checkAuthHook(sails){
  return {
    routes: {
        before: {
          '/cms*': async function(req, res, next){
            if(!req.session)
              return next()

            if(!req.session.userId)
              return res.unauthorizedAdmin()

            let user = await User.findOne({
              emai: req.session.userId,
              isActive: true
            })

            if(!user){
              delete req.session.userId
              return res.unauthorizedAdmin()
            }

            // check if user is authorized for cms
            if(user.roles !== undefined && user.roles.cms !== undefined && !user.roles.cms.authorized){
              return res.unauthorizedAdmin()
            }

            // authorized
            req.session.userId = user.email
            return next()
          },
          '/*': async function(req, res, next){
            return next()
          }
        }
    }
  }
}
