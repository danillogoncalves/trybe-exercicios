const express = require('express');

const app = express();
app.use(express.json());

const store = { data: [], index: 0 };

// listPerson
app.get('/person', (_req, res) => {
  const items = store.data;
  res.json(items);
});

// addPerson
app.post('/person', (req, res) => {
  const data = req.body;
  store.index += 1;
  const id = store.index;
  const item = { ...data, id };
  store.data.push(item);

  res.status(201).json(item);
});

// editPerson
// removePerson
// getPerson

app.listen(3000, () => console.log('Rodando na porta 3000'));
