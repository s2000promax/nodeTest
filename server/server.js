const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = 3000;

dotenv.config();

const corsOptions = {
    origin: process.env.CORS_DOMAIN,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    credentials: true
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
