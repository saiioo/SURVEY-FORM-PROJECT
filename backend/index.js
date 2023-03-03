// require("dotenv").config();
// const conn = require("./Database/db");
// const express= require("express");
// const cors = require("cors");
// const bodyParser = require('body-parser');
// const app = express();

// app.use(cors())
// app.use(bodyParser.json());

// let port =process.env.PORT ||  8080;
// conn();
// const registerRoute = require("./routes/register");
// const loginRoute = require("./routes/login");

// const createSurveyRoute = require("../backend/models/surveySchema");

// const  routerTheme = require("./themes/themes")

// app.use(routerTheme)
// app.use(registerRoute);
// app.use(loginRoute);
// app.use(createSurveyRoute);
// app.listen(port, () => console.log(`app running on port ${port}`));

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
const createSurveyRoute = require("../backend/routes/createSurvey");
const  routerTheme = require("./themes/themes")

app.use(bodyParser.json());
app.use(routerTheme)
app.use(registerRoute);
app.use(loginRoute);
app.use(createSurveyRoute);
app.listen(port, () => console.log(`app running on port ${port}`));



// require("dotenv").config();
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const connection = require('./database/db')
// const registerRoute = require('./routes/register');
// const loginRoute = require('./routes/login');
// const createSurveyRoute = require('./routes/createSurvey');
// const routerTheme = require('./themes/themes');
// const displayQuestion = require('./routes/displayQuestions');


// // database connection
// connection();

// // middlewares
// app.use(express.json());
// app.use(cors());

// //routes

// app.use( registerRoute)
// app.use(loginRoute)
// app.use(createSurveyRoute);
// app.use(routerTheme)

// const port = process.env.PORT || 8080;
// app.listen(port, console.log(`Listening on port ${port}...`));


