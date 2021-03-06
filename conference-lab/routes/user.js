var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrf();
router.use(csrfProtection);

router.get('/profile', isLoggedIn, function(req, res, next){
    res.render('user/profile');
});

router.get('/logout', isLoggedIn, function(req, res, next){
    req.logout();
    res.redirect('/user/signin');
});


router.use('/', notLoggedIn, function(req, res, next){
    next();
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/',
    failureRedirect: '/user/signup',
    failureFlash: true
}));


router.get('/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signin', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.post('/signin', passport.authenticate('local.signin', {

    successRedirect: '/',
    failureRedirect: '/user/signin',
    failureFlash: true
}));





module.exports = router;

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next){
    if(!req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}