require('dotenv').config();

const PORT = process.env.PORT || 5000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan('dev'));

// connet to mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to Mongo!');
});

app.get('/', (req, res) => {
  res.send('We out here!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
