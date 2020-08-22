require('dotenv').config();
const express = require('express');
const app = express();
const databaseFunctions = require('./db');

app.use(express.json());

app.use('/api/fetchOptions', require('./routes/fetchOptions'));
app.use('/api/searchRestaurants', require('./routes/searchRestaurants'));

databaseFunctions.initializeDatabase((err, database) => {
  if (err) return console.error(err);
  app.listen(process.env.PORT, () =>
    console.log(`Server is listening on PORT ${process.env.PORT}`)
  );
});
