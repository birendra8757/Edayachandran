const express = require('express');


require("dotenv").config();
const route = require('./Route/route.js');
const mongoose = require('mongoose');
const app = express();
const PORT=process.env.PORT ||3000
app.use(express.json());

mongoose.connect("mongodb+srv://birendra:Kumar123@cluster0.enhlifs.mongodb.net/Edayachandran", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))
app.use('/', route)

app.listen(PORT, function () {
    console.log('Express app running on port ' + (3000))
});
