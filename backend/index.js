const conn = require("./Database/db");
const express= require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();

app.use(cors())

let port =process.env.PORT ||  8080;
conn();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");

const createSurveyRoute = require("../backend/models/surveySchema");

const  routerTheme = require("./themes/themes")

app.use(bodyParser.json());
app.use(routerTheme)
app.use(registerRoute);
app.use(loginRoute);
app.use(createSurveyRoute);
app.listen(port, () => console.log(`app running on port ${port}`));