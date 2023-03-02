const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {type: String, required: true},
    email: {type:String, unique: true, required: true},
    phone: {type: String,required:true,min:[10,"Enter 10 Digits"],max:[10,"Enter 10 Digits"]},
    profession: {type: String, required: true},
    password: {type: String, required: true},

}, {timestamps:true}) 
const users = mongoose.model("user", userSchema);
module.exports= users;
