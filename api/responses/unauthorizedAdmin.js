module.exports = function unauthorized(){

    // Local copy created so as to not accidentally modify them
    var req = this.req
    var res = this.res
    
    if(req.session && req.session.userId){
        delete req.session.userId
    }

    // Most likely POST API request
    if(req.method == "POST"){
        return res.forbidden()
    }
    
    // Save user's intended url path so you can redirect 
    // him there after he logs in and is authenticated
    req.session.intendedUrl = req.originalUrl
    return res.redirect('/auth/login')
}

