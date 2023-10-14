import express from 'express';
import home from './routes/home.js';

const app = express();

app.use(express.json());
app.use(home);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});