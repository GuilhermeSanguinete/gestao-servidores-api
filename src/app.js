import 'dotenv/config'
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Api subiu na porta ${port}`));