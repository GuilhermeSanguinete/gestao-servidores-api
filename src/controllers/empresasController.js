import * as empresaService from '../services/empresaService.js';

export async function listaTodasEmpresas(req, res) {
    try {
        const empresas = await empresaService.listaTodasEmpresas();
        res.json(empresas);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao listar empresas' });
    }
}

export async function cadastraEmpresa(req, res) {
    try {
        const empresa = req.body;
        const novaEmpresa = await empresaService.cadastraEmpresa(empresa);
        res.status(201).json(novaEmpresa);
    }
    catch (error) {
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: "Erro ao cadastrar nova empresa" });
    }
}