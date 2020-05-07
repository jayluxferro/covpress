module.exports = async function(req, res, proceed) {
  if(!req.session.websiteActive){
    return res.forbidden()
  }
  
  return proceed()
}
