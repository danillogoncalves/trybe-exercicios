const express = require('express');
require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
