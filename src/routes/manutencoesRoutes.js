import * as manutencoesController from '../controllers/manutencoesController.js';
import express from 'express';

const router = express.Router();

router.get('/', manutencoesController.listarManutencoes);
router.post('/', manutencoesController.cadastrarManutencao);

export default router;