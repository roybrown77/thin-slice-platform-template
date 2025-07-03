const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/logs', (req, res) => {
  res.json([
    { level: 'info', msg: 'System initialized' },
    { level: 'debug', msg: 'Mock user session created' },
  ]);
});

app.listen(4000, () => console.log('API running on http://localhost:4000'));
