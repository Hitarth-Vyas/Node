exports.getLogin = (res, req, next) => {
  res.render('shop/login', {
    path: '/login',
    pageTitle: 'Login'
  })
}