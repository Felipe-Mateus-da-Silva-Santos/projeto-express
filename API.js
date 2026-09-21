const express = require('express');
const API = express();
const PORTA = 3000;

const tarefas = [
    {id: 1 , titulo:'Escovar os dentes', Concluida: false },
    {id: 2 , titulo:'Tomar banho', Concluida: true},
    {id: 3 , titulo:'Ir pra escola', Concluida: false}
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
        t => t.id === parseInt(id)
    );
    if (!tarefa){
       return res.statusCode(404).json({error:'Tarefa não encontrada'});
    }
    res.statusCode(200).json(tarefas)
});

API.get('/tarefas', (req, res) => {
    const { Concluida } = req.query;
    const tarefasFiltradas = Concluida=true
        ? tarefas.filter(t => t.Concluida === Concluida)
        : tarefas;

    res.json(tarefasFiltradas);
});

