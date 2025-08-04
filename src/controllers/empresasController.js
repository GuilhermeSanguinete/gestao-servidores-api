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

export async function getEmpresasPorId(req, res) {
    try {
        const id = req.params.id;
        const resultado = await empresaService.getEmpresasPorId(id);
        res.status(200).json(resultado);
    }
    catch (error) {
        res.status(500).json({ message: 'Erro ao consulta empresa por id'});
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

export async function alteraEmpresa(req, res) {
    try {
        const empresa = req.body;
        await empresaService.alteraEmpresa(empresa);
        res.status(200).json({ message: 'Empresa atualizada com sucesso!' });
    }
    catch (error) {
        if (error.statusCode) {
            res.status(error.statusCode).json({ error: error.message });
        }
        res.status(500).json({ error: "Erro ao alterar empresa" });
    }
}

export async function deletaEmpresa(req, res) {
    try {
        const id = req.body.id;
        await empresaService.deletaEmpresa(id);
        res.status(200).json({ message: 'Empresa deletada com sucesso!' });
    }
    catch (error) {
        res.status(500).json({ error: "Erro ao deletar empresa" });
    }
}