const express = require('express');
const applicationsRoutes = require('./routes/applications');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    }).then(() => {
    console.log('Connected to the database');
    }).catch((error) => {
    console.log('Error connecting to the database: ', error.message);
    });

app.use('/applications', applicationsRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });