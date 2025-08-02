import express from 'express';
import * as empresaController from '../controllers/empresasController.js';

const router = express.Router();

router.get('/', empresaController.listaTodasEmpresas);
router.post('/', empresaController.cadastraEmpresa);

export default router;