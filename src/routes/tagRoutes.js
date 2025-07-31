import express from 'express';
import * as tagController from '../controllers/tagController.js';

const router = express.Router();

router.get('/', tagController.listaTags);
router.post('/', tagController.cadastrarTag);
router.put('/', tagController.alterarTag);
router.get('/:id', tagController.buscaTagPorId);
router.get('/busca/nome', tagController.listaTagsPorNome);

export default router;