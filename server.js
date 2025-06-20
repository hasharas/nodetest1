// const mongoose = require('mongoose');
// const connectDb = require('./config/db');
// const dotenv = require('dotenv');
// const express = require('express');


// dotenv.config();
// connectDb();


// const app = express();

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//       console.log(`Server start on port ${PORT}`);
// });


const dotenv = require('dotenv');
const express = require('express');
const connectDb = require('./config/db');

dotenv.config();
connectDb();

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`server start port on ${PORT}`);
});


