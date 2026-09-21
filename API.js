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
    res.json(tarefas);
});

API.get('/tarefas:id', (req, res) => {
    const id = req.params.id;
    const tarefa = tarefas.find(
        u => u.id === parseInt(id)
    );
    if (!tarefa){
       return res.statusCode(404).json({error:'Tarefa não encontrada'});
    }
    res.status(200).json(tarefas)
});


