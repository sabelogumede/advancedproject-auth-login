const express = require('express'),
app = express();
passport = require('passport'),
facebookRoutes = require('./controller/facebook.routes');


// localhost:300/auth/facebook/<Route>
app.use('/auth/facebook/',facebookRoutes);


app.listen(3000,()=>{
    console.log('listening on http://localhost:3000/');
})