import 'dotenv/config'
import express from 'express';
import cors from 'cors';

import tagRoutes from './routes/tagRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/tags', tagRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Api subiu na porta ${port}`));