const express = require('express');
const app = express();
const carRouter = require('./router/car-router');
const authRouter = require('./router/auth-router');
const bodyParser = require('body-parser');


app.use(bodyParser.json());

app.use('/api' , carRouter,authRouter)


app.listen(3000, () => {
    console.log("Server is runing on Port 3000");
}) 


