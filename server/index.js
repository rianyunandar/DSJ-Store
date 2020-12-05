import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Products from './products.js';
import colors from 'colors'

import ConnectDB from './Config/database.js';

const app = express();


//post setting

ConnectDB();



const port = process.env.PORT || 3001;

//for debuggin wiht morgan
app.use(morgan("dev"));
//Support FE
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    next();
});

//for render login page
app.get('/', function (req, res) {
    res.json({
        message: 'Welcome to DSJ Store'
    })
    // res.render('pages/login');FF
});

app.get('/api/products', function (req, res) {
    res.json(Products)
    // res.render('pages/login');FF
});

app.get('/api/products/:id', function (req, res) {
   const product = Products.find ((p)=>p._id === req.params.id)
    res.json(product)
    // res.render('pages/login');FF
});



app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on port  + ${port}`.yellow.bold);
});