import express from 'express';
import * as empresaController from '../controllers/empresasController.js';

const router = express.Router();

router.get('/nome/:nome', empresaController.buscarEmpresasPorNome);
router.get('/cnpj/:cnpj', empresaController.buscarEmpresasPorCNPJ);
router.get('/setor/:setor', empresaController.buscarEmpresasPorSetor);

router.get('/:id', empresaController.buscarEmpresaPorId);

router.get('/', empresaController.listarEmpresas);
router.post('/', empresaController.criarEmpresa);
router.put('/:id', empresaController.atualizarEmpresa);
router.delete('/:id', empresaController.deletarEmpresa);

export default router;
