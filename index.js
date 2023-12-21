const express = require('express');
const pool = require('./db');

const app = express();
const port = 3000;

// Exemplo de rota para consulta no banco de dados
app.get('/consultar-dados', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vr_ger_empresa');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro na consulta ao banco de dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
