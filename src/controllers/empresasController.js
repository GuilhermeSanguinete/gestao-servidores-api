import * as empresaService from '../services/empresaService.js';

export async function listaTodasEmpresas(req, res) {
    try {
        const empresas = await empresaService.listaTodasEmpresas();
        res.json(empresas);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar empresas' })
    }
}