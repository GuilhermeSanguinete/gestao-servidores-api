import express from 'express';
import * as tagController from '../controllers/tagController.js';

const router = express.Router();

router.get('/busca/:nome', tagController.buscarTagsPorNome);

router.get('/:id', tagController.buscarTagPorId);

router.get('/', tagController.listarTags);
router.post('/', tagController.criarTag);
router.put('/:id', tagController.atualizarTag);
router.delete('/:id', tagController.deletarTag);

export default router;
