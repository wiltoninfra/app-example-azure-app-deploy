const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Adatech Azure App Deploy!');
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
