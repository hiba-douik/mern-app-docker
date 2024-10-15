const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); // If you're using dotenv for environment variables
const port = process.env.PORT || 5000;

// Add this line for debugging
console.log('MONGODB_URI:', process.env.MONGODB_URI);

app.use(cors());
app.use(express.json());

// Your routes and other middleware here

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});