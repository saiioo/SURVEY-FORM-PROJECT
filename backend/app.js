const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const  routerTheme = require("./themes/themes")
const app = express();
const port = 8080 || process.env.PORT
app.use(bodyParser.json());
app.use(routerTheme)


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
