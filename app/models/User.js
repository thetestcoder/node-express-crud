const mongoose = require('mongoose')


const UserSchema =  new mongoose.Schema({
    first_name:{
        type:String,
        required:['true', 'First Name is required'],
        trim:true
    },
    last_name:{
        type:String,
        required:['true', 'Last Name is required'],
        trim:true
    }
})


module.exports = mongoose.model('User', UserSchema)