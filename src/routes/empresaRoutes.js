import express from 'express';
import * as empresaController from '../controllers/empresasController.js';

const router = express.Router();

router.get('/', empresaController.listaTodasEmpresas);
router.post('/', empresaController.cadastraEmpresa);
router.put('/', empresaController.alteraEmpresa);
router.delete('/', empresaController.deletaEmpresa);
router.get('/:id', empresaController.getEmpresasPorId);
router.get('/nome/:nome', empresaController.getEmpresasPorNome);
router.get('/cnpj/:cnpj', empresaController.getEmpresasPorCNPJ);
router.get('/setor/:setor', empresaController.getEmpresasPorSetor);

export default router;