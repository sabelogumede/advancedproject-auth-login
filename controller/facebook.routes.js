
const Router = require('express').Router(),
    passport = require('passport');

require('./facebook.setup');

//redirect to facebook login page
Router.get('/', passport.authenticate('facebook',{
    scope: ['public_profile']
}));

// 
Router.get('/redirect', passport.authenticate('facebook'),(req,res) => {
    // res.redirect('/homepage/'+req.user.id);
    res.send('logged in');
})

module.exports = Router;