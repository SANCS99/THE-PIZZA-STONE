const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://ghnanuththara:pizza123@cluster0.akbr9.mongodb.net/pizza-stone'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected', () =>{
    console.log('MongoDB Connection Successfull');
})


db.on('error' , () =>{
    console.log(`MongoDB Connection Failed`)
})

module.exports = mongoose