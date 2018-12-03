const express = require('express'),
    app = express();
    passport = require('passport'),
    mongoose = require('mongoose'),
    facebookRoutes = require('./controller/facebook.routes');

require('./controller/facebook.setup');

// connect to our authuserlogin DB
mongoose.connect('mongodb://localhost/authuserlogin');

// localhost:300/auth/facebook/<Route>
app.use('/auth/facebook/',facebookRoutes);


app.listen(3000,()=>{
    console.log('listening on http://localhost:3000/');
})