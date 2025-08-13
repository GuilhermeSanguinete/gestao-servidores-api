import express from 'express';
import * as servidoresController from '../controllers/servidoresController.js';

const router = express.Router();

router.get('/empresa/:empresaId', servidoresController.buscarServidorPorEmpresa);

router.get('/:id', servidoresController.buscarServidorPorId);

router.get('/', servidoresController.listarServidores);
router.post('/', servidoresController.cadastrarServidor);
router.delete('/', servidoresController.deletarServidor);
router.put('/', servidoresController.atualizarServidor);

export default router;