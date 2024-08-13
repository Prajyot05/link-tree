var express = require('express')
import cors from 'cors';
require('dotenv').config({path: './env'})


import transactionRouter from './routes/transaction.route.js'

const app = express(); 

 app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use("/getTransaction" , transactionRouter)

app.get('/', function (req, res) {  
    res.json({
        "name" : "dishant",
    }); 
}); 

var server = app.listen(3000, function () {  
    console.log('Node server is running..');  
});  