const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.get("/form/surveylist", async(req, res)=> {
  console.log("I am in surveylist get method")
  try{
    const data = await surveyModel.find()
    console.log(data)
    if(data){
      return res.status(200).json({
        "message" : "success",
        data
      })
    }
  }
  catch(e){
    return res.status(500).json({
      "message" : e.message,
      "status" : "failed"
    })
  }
})

module.exports = router;

