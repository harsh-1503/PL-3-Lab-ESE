const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
        console.log('Mongo DB Connected Successfully');
    }).catch((err)=>{
        console.log("DB not connected ",err);
    })
}
module.exports = connectDB