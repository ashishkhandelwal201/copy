import express from 'express';
import bodyParser from 'body-parser';

var app=express();

import IndexRouter from './routes/IndexRouter.js';

//Configuration to extract request body content
app.use(bodyParser());



//configuration for template engine
app.set("view engine","ejs"); 
app.set("views","./views"); 


//route level middleware to load specific route as per user
app.use("/",IndexRouter);

app.listen(3000);
console.log("server invoked at link http://localhost:3000"); 
