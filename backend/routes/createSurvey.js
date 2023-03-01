const express = require("express");
const surveyModel = require("../Models/createSurveySchema");
const router = express.Router();
const verify = require("../auth/auth");


router.post("/createsurvey",verify, async(req, res)=> {
    try {
        const {name, startDate, endDate, description, otherCriteria, type, image}= req.body;
        req.user;
        const surveyresult = await surveyModel.create ({
            name,
            startDate,
            endDate,
            description,
            otherCriteria,
            type,
            image,
            madeby: req.user
        })
        return res.status(201).json({
            status: "Success",
            message: surveyresult
        })

    }catch(e){
        res.status(400).json({
            status: "Failed",
            message: e.message
        })

    }
})

module.exports = router;

