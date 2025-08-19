import 'dotenv/config'
import express from 'express';
import cors from 'cors';

import tagRoutes from './routes/tagRoutes.js';
import empresaRoutes from './routes/empresaRoutes.js';
import servidoresRoutes from './routes/servidoresRoutes.js'
import manutencoesRoutes from './routes/manutencoesRoutes.js'

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tags', tagRoutes);
app.use('/empresas', empresaRoutes);
app.use('/servidores', servidoresRoutes);
app.use('/manutencoes', manutencoesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Api subiu na porta ${port}`));