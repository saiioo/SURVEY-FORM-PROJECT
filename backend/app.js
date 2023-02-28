const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});
