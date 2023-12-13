const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    mobile:Number,
    idProof:String,
    address:String,
    userId:String,
    department:String,
    class1:String,
    password:String,
})

module.exports = mongoose.model('users',userSchema);