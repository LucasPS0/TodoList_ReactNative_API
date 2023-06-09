const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const connectDB = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conectar ao MongoDB
connectDB();

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
