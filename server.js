const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = 5000;

// Connect DB
connectDB();

// Define Routes
app.use('/api/checklist', require('./routes/api/checklist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
