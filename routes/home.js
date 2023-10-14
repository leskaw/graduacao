import express from 'express';
import { instituicao, nomeCurso } from '../data.js';

const home = express();

home.use(express.json());

home.get('/instituicao', (req, res) => {
  res.json(instituicao);
});

home.get('/nome_curso', (req, res) => {
  res.json(nomeCurso);
});

export default home;