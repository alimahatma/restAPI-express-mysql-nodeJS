require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');

const useRoutes = require('./routes/users');

const midddlewareLogRequest = require('./middleware/log');

const app = express();

app.use(midddlewareLogRequest);

app.use(express.json());

app.use('/users', useRoutes);

app.get('/', (req, res) => {

    res.send('Hello ini halaman Utama');
});

app.listen(PORT, () => {
    console.log(`Server berhasil dijalankan di ${PORT}`);
});