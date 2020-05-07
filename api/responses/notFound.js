module.exports = function notFound(){
  const req = this.req
  const res = this.res

  return res.view('404', { 
    layout: 'layouts/layout'
  })
}
