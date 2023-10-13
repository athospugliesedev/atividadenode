import express from 'express';
import bodyParser from 'body-parser';
import prisma from './database';
import { Curriculum } from './models';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/curriculum', async (req, res) => {
  const curriculum: Curriculum = req.body;
  try {
    const newCurriculum = await prisma.curriculum.create({ data: curriculum });
    res.json(newCurriculum);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o currículo.' });
  }
});

app.get('/curriculum', async (req, res) => {
  const allCurriculum = await prisma.curriculum.findMany();
  res.json(allCurriculum);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
