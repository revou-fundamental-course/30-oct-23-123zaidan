const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');

app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bmi_data'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
    res.send('Selamat datang di server BMI');
});

app.post('/simpan-data', (req, res) => {
    const data = req.body;

    db.query('INSERT INTO bmi_data (gender, weight, age, height, hasil_bmi) VALUES (?, ?, ?, ?, ?)', [data.gender, data.weight, data.age, data.height, data.hasilBMI], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.json({ status: 'Data gagal disimpan' });
        }
        res.json({ status: 'Data berhasil disimpan' });
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
