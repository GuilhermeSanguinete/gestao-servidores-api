import express from 'express';
import * as servidoresController from '../controllers/servidoresController.js';

const router = express.Router();

router.get('/', servidoresController.getServidores);
router.get('/:id', servidoresController.getServidorById);
router.get('/empresa/:empresaId', servidoresController.getServidoresByEmpresa);
router.post('/', servidoresController.postServidores);
router.delete('/', servidoresController.deleteServidores);
router.put('/', servidoresController.putServidores);

export default router;