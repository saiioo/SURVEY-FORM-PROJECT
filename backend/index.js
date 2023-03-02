const conn = require("./Database/db");
const express= require("express");
const app = express();
let port =process.env.PORT ||  8080;
conn();
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const createSurveyRoute = require("./routes/createSurvey");

app.use(registerRoute);
app.use(loginRoute);
app.use(createSurveyRoute);
app.listen(port, () => console.log(`app running on port ${port}`));
