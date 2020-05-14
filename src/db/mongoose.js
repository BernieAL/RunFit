const mongoose = require('mongoose')


const uri = 'mongodb+srv://store-admin:runfit@freecluster-em0ih.mongodb.net/runfit_inventory?retryWrites=true&w=majority';

mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex: true, useUnifiedTopology:true} )
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("Db connected successfully")
})
/*

START UP MONGODB LOCAL SERVER

run this in powershell
/Users/balma/mongodb/bin/mongod.exe --dbpath=/Users/balma/mongodb-data
*/

//mongodb+srv://store-admin:<runfit@freecluster-em0ih.mongodb.net/runfit_inventory?retryWrites=true&w=majority

//mongodb://127.0.0.1:27017/run-fit'