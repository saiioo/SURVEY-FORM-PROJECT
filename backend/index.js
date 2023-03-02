const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const  routerTheme = require("./themes/themes")
const registerRouter = require("./routes/register")
const app = express();
const port = 8080 || process.env.PORT
app.use(bodyParser.json());
app.use(routerTheme)
app.use(registerRouter)



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});