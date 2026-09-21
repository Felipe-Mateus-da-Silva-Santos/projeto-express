const express = require('express');
const API = express();
const PORTA = 3000;

API.get('/', (req, res) => {
    res.send('API de tarefas no ar!');
});
