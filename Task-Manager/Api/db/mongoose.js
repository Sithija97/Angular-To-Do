//Conncetion logic of MongoDB db

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true}).then(()=>{
    console.log('Connected to Database Successfully ! ');
}).catch((e)=>{
    console.log('Error while connecting to Database');
    console.log('error: '+e);
})

module.exports = mongoose;