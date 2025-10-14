const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());
const cozinhaRoutes = require('./routes/cozinhas');
app.use('/cozinhas', cozinhaRoutes);

// Rota de teste
app.get('/', (req, res) => {
    res.send('API de Cozinhas Veganas em Uberlândia');
})

//Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});