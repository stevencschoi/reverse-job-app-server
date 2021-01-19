require("dotenv");

const PORT = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('We out here!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
})