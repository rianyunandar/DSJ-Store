const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
//post setting
const port = process.env.PORT || 3001;

//for debuggin wiht morgan
app.use(morgan("dev"));
//Support FE
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

//for render login page
app.get('/', function(req, res) {
    res.json({
            message: 'Welcome to DSJ Store'
        })
        // res.render('pages/login');
});


app.listen(port, () => {
    console.log("Server is up on port " + port);
});