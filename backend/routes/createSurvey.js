// const express = require("express");
// const surveyModel = require("../Models/createSurveySchema");
// const router = express.Router();
// const verify = require("../auth/auth");


// router.post("/createsurvey",verify, async(req, res)=> {
//     try {
//         const {name, startDate, endDate, description, otherCriteria, type, image}= req.body;
//         req.user;
//         const surveyresult = await surveyModel.create ({
//             name,
//             startDate,
//             endDate,
//             description,
//             otherCriteria,
//             type,
//             image,
//             madeby: req.user
//         })
//         return res.status(201).json({
//             status: "Success",
//             message: surveyresult
//         })

//     }catch(e){
//         res.status(400).json({
//             status: "Failed",
//             message: e.message
//         })
//     }
// })

// module.exports = router;




const express = require("express");
const surveyModel = require("../models/surveySchema");
const router = express.Router();
var bodyParser = require('body-parser')
const verify = require("../auth/auth");
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.post("/createsurvey", async(req, res)=> {
    console.log('create survey fetched')
    try {
        if(req.body){
            console.log(req.body)
            const {name, startDate, endDate, description, otherCriteria, type,form_id}= req.body;
            const surveyresult = await surveyModel.create ({
                name,
                startDate,
                endDate,
                description,
                otherCriteria,
                type,
                form_id
            })

            if(surveyresult){
                console.log("yes nothing in here")
            }
            return res.status(201).json({
                status: "Success",
                message: surveyresult
            })
        }
        else{
            return res.send("Enter the correct details")
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            status: "Failed",
            message: "Internal Server Error"
        });
    }
    
})

module.exports = router;

