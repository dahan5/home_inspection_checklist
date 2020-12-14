const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = 5000;

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/checklist', require('./routes/api/checklist'));

app.get('/', (req, res) => {
  res.send('API running...');
});

app.listen(PORT, () => console.log(`Server on port ${PORT} started...`));
