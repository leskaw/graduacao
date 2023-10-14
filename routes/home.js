import express from 'express';
import { instituicao, nomeCurso } from '../data.js';

const app = express();

app.use(express.json());

app.get('/instituicao', (req, res) => {
  res.json(instituicao);
});

app.get('/nome_curso', (req, res) => {
  res.json(nomeCurso);
});

export default app;