const express = require('express');
const app = express();
const port = 3000;

const firetruckRoutes = require('./routes/firetruck.routes');

app.use('/firetrucks', firetruckRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
