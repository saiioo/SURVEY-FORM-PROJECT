const express = require('express');
const cors = require("cors")
const bodyParser = require('body-parser');
const  routerTheme = require("./themes/themes")
const app = express();
const port = 8080 || process.env.PORT
app.use(bodyParser.json());
app.use(routerTheme)
app.post('/api/register', (req, res) => {
  const { name, email, phone, profession, password } = req.body;
  console.log('someone posted something')
  if(req.body){
    console.log(req.body)
  }

  // Validate the form data
  if (!name || !email || !phone || !profession || !password) {
    return res.status(400).json({ error: 'Please fill in all fields' });
  }

  // Save the form data to the database (or do any other necessary processing)
  // ...

  // Send a success response
  return res.json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
