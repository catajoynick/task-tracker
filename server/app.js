const express = require('express');
const app = express();

// Connect to db
require('./startup/database')();
app.get('/', (req, res) => {
  res.send('Hello world');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
