const express = require('express');
const cors = require('cors');

const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

// servir o site
app.use(express.static('site'));

// rota teste
app.get('/teste', (req, res) => {
    res.send('API funcionando 🚀');
});

// rota contas
app.get('/contas', (req, res) => {
    db.query('SELECT * FROM contas', (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});



// LISTAR CONTAS PELO SISTEMA
app.post('/contas', (req, res) => {
    const {
        descricao,
        tipo,
        valor_total,
        data_vencimento,
        categoria_id
    } = req.body;

    const saldo = valor_total;

    const sql = `
        INSERT INTO contas 
        (descricao, tipo, valor_total, saldo, data_vencimento, status, categoria_id)
        VALUES (?, ?, ?, ?, ?, 'PENDENTE', ?)
    `;

    db.query(sql, [descricao, tipo, valor_total, saldo, data_vencimento, categoria_id], (err, result) => {
        if (err) return res.status(500).json(err);

        res.json({ message: 'Conta criada com sucesso' });
    });
});