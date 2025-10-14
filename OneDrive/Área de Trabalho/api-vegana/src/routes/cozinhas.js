const express =require('express');
const router = express.Router();
const Cozinhas = require('../models/Cozinha');

// Listar todas as cozinhas
router.get('/', (req, res) => {

});

// Adicionar uma nova cozinha
router.post('/', (req, res) => {
    const novaCozinha = req.body;
    Cozinhas.push(novaCozinha);
    res.status(201).json(novaCozinha);
})

module.exports = router;