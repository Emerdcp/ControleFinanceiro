const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// permitir acessar arquivos do site
app.use(express.static('site'));

app.get('/teste', (req, res) => {
    res.send('API funcionando 🚀');
});

app.get('/contas', (req, res) => {
    db.query('SELECT * FROM contas', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});