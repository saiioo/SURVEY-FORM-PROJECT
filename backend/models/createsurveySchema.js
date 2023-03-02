const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
    name:{type:String, required:true},
    startDate:{type:Date,required:[true,"Enter Date in YYYY-MM-DD format"]},
    endDate:{type:Date,required:[true,"Enter Date in YYYY-MM-DD format"]},
    description:{type:String,required:true},
    otherCriteria:{type:String},
    type:{type:String,enum:['multiple choice','rating','text'],required:true},
    image:{type:String},
    madeBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const survey = mongoose.model("survey",surveySchema);
module.exports = survey
