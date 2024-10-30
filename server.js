const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Підключення до MongoDB
mongoose.connect('mongodb://localhost:27017/cityDirectory', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Запуск серверу
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
