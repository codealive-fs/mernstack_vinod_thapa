const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env' });


const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection, ${err}`));

//Middleware

const middleware = (req, res, next) => {
    console.log(`Hello my middleware`);
    next();
}

app.get('/', (req, res) => {
    res.send(`Hello world from the server`);
});

app.get('/about', (req, res) => {
    res.send(`Hello ABOUT world from the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello CONTACT world from the server`);
});

app.get('/signin', (req, res) => {
    res.send(`Hello Login world from the server`);
});

app.get('/signUp', (req, res) => {
    res.send(`Hello Registration Login world from the server`);
});

app.listen(3000, () => {
    console.log(`server is running at port no 3000`);
})  