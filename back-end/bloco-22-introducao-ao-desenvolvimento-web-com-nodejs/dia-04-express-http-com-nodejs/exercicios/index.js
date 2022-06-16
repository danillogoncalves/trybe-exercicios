const express = require('express');
const bodyParse = require('body-parser');
const simpsonsUtils = require('./fs-utils');

const app = express();
app.use(bodyParse.json());

app.get('/ping', function(_req, res) {
  res.status(200).json({ message: 'pong' });
});
// http GET :3001/ping
// Insomnia
// GET - http://localhost:3001/ping

app.post('/hello', function(req, res) {
  const { name } = req.body;
  res.status(201).json({ "message": `Hello, ${name}!` })
});
// http POST :3001/hello name='Danillo'
// Insomnia
// POST - http://localhost:3001/hello
// BODY(JSON):
// {
// 	"name": "Danillo"
// }

app.post('/greetings', function(req, res) {
  const { name, age } = req.body;
  if (Number(age) > 17) return res.status(200).json({ "message": `Hello, ${name}!` });
  res.status(401).json({ "message": "Unauthorized" });
})

// http POST :3001/greetings name='Danillo' age:=35
// http POST :3001/greetings name='Vitor' age:=8
// Insomnia
// POST - http://localhost:3001/greetings
// BODY(JSON):
// {
// 	"name": "Danillo",
// 	"age": 35
// }
// {
// 	"name": "Vitor",
// 	"age": 8
// }

app.put('/user/:name/:age', function(req, res) {
  const { name, age } = req.params;
  res.status(200).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` })
})
// http PUT :3001/user/Danillo/35
// Insomnia
// PUT - http://localhost:3001/user/Danillo/35

app.get('/simpsons/:id', async function(req, res, next) {
  const { id } = req.params;
  try {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpsonsId = simpsons.find((simpsong) => Number(simpsong.id) === Number(id));
    if (!simpsonsId) return res.status(404).json({ "message": 'simpson not found' })
    res.status(200).json(simpsonsId);
  } catch (err) {
    next(err);
  }
});
// http GET :3001/simpsons/2
// Insomnia
// GET - http GET :3001/simpsons/2
app.get('/simpsons', async function(req, res, next) {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();
    res.status(200).json(simpsons);
  } catch (err) {
    next(err);
  }
})
// http GET :3001/simpsons
// Insomnia
// GET - http://localhost:3001/simpsons/2

app.post('/simpsons', async function(req, res, next) {
  const { id, name } = req.body;
  try {
    const simpsons = await simpsonsUtils.getSimpsons();
    const simpsonsId = simpsons.find((simpson) => Number(simpson.id) === Number(id));
    const simpsonsName = simpsons.find((simpson) => simpson.name.toLowerCase() === name.toLowerCase());
    if (simpsonsId || simpsonsName) return res.status(409).json({ message: 'id already exists' });
    const newSimpsons = [...simpsons, { id, name }];
    await simpsonsUtils.setSimpsons(newSimpsons);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

// http POST :3001/simpsons id:=11 name='Danillo Gonçalves Batista'
// Insomnia
// POST - http://localhost:3001/simpsons
// BODY(JSON):
// {
// 	"id": 11,
// 	"name": "Danillo Gonçalves Batista"
// }


app.use(function (err, _req, res, _next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3001, function() {
  console.log('Aplicação ouvindo a porta 3001');
})