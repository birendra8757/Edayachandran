const express = require('express');
const route = require('./Route/route.js');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://birendra:Kumar123@cluster0.enhlifs.mongodb.net/Edayachandran", {
    useNewUrlParser: true
})
.then(() => console.log("MongoDb is connected"))
.catch(err => console.log(err))
app.use('/', route)

app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});
