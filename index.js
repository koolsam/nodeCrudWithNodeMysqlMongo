const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/leadMsqlMongo';


const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection;

con.on('open', () => {
    console.log('connected....');
});

app.use(express.json());

const leadRouter = require('./routers/route');
app.use('/lead', leadRouter);

app.listen(9000, () => { 
    console.log('Server running')
});