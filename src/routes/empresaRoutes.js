import express from 'express';
import * as empresaController from '../controllers/empresasController.js';

const router = express.Router();

router.get('/', empresaController.listaTodasEmpresas);
router.post('/', empresaController.cadastraEmpresa);
router.put('/', empresaController.alteraEmpresa);
router.delete('/', empresaController.deletaEmpresa);

export default router;