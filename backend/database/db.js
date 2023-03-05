
const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const uri = `mongodb://127.0.0.1:27017/testsurvey`
async function getConnection() {
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection