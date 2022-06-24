const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const Users = require('./models/Users')

app.use(bodyParser.json());

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const validad = Users.isValidad(firstName, lastName, email, password);
  if (validad.error) return res.status(400).json(validad);

  const id = await Users.createUser(firstName, lastName, email, password);
  res.status(201).json(
    {
      id,
      firstName,
      lastName,
      email
    }
  );
})

app.listen(PORT, console.log(`App listening on port ${PORT}`));
