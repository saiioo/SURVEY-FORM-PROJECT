const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/createquestion/:id", async(req, res)=> {
  try{
    const id = req.params.id
    const {questionsArr} = req.body
    const data = await surveyModel.updateOne({ form_id: id }, { $set: {questions:questionsArr} })
    if(data){
      return res.status(200).json({
        "message" : "success",
        data
      })
    }
  }
  catch(e){
    return res.status(500).json({
      "message" : err.message,
      "status" : "failed"
    })
  }
})

module.exports = router;

