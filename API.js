const express = require('express');
const API = express();
const PORTA = 3000;

const tarefas = [
    {id: 1 , titulo:'Escovar os dentes', status:'Pendente'},
    {id: 2 , titulo:'Tomar banho', status:'Concluida'},
    {id: 3 , titulo:'Ir pra escola', status:'Pendente'}
];

API.get('/', (req, res) => {
    res.send('API de tarefas no ar!');
});

API.get('/tarefas', (req, res) => {
    res.send(tarefas);
});