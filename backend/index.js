
const conn = require("./Database/db");
const express= require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
app.use(cors())
let port =process.env.PORT ||  8080;
conn();
const registerRoute = require('../backend/routes/register')
const loginRoute = require("./routes/login");
// const createSurrajaveyRoute = require("../backend/models/surveySchema");
const createques = require('./routes/displayQuestions')
const createSurveyRoute = require("../backend/routes/createSurvey");
const  routerTheme = require("./themes/themes")

app.use(bodyParser.json());
app.use(routerTheme)
app.use(createques)
app.use(registerRoute);
app.use(loginRoute);
app.use(createSurveyRoute);
app.listen(port, () => console.log(`app running on port ${port}`));




