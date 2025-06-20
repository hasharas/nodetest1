const mongoose = require('mongoose');
const connectDb = require('./config/db');
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');


dotenv.config();
connectDb();


const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
      console.log(`Server start on port ${PORT}`);
});




