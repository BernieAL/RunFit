const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/run-fit', {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
})

/*

START UP MONGODB LOCAL SERVER

run this in powershell
/Users/balma/mongodb/bin/mongod.exe --dbpath=/Users/balma/mongodb-data
*/
