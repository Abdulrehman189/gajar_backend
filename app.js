const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const url = "mongodb://localhost/Stock"

const app = express()
// const port = 8000;
app.use(cors());


mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true })
const con = mongoose.connection

con.on('open', () => {
     console.log('connect to mongodb');
})
app.use(express.json())

const Router = require('./router/stockRouter')
app.use('/stock',Router)


  

app.listen(9000, () => {
    console.log('hello');
});