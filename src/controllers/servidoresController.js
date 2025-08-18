import * as servidoresService from '../services/servidoresServices.js';

export async function listarServidores(req, res) {
    try {
        const resultado = await servidoresService.listarServidores();
        res.status(200).json(resultado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao consultar servidores ' });
    }
}

export async function cadastrarServidor(req, res) {
    try {
        const servidor = req.body;
        const resultado = await servidoresService.cadastrarServidor(servidor);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar novo servidor ' });
    }
}

export async function deletarServidor(req, res) {
    try {
        const id = req.params.id;
        await servidoresService.deletarServidor(id);
        res.status(200).json({ message: 'Servidor deletado com sucesso ' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar servidor.'})
    }
}

export async function atualizarServidor(req, res) {
    try{
        const empresa = req.body;
        empresa.id = req.params.id;
        await servidoresService.atualizarServidor(empresa);
        res.status(200).json({ message: 'Servidor atualizado com sucesso '});
    }
    catch (error) {
        res.status(500).json({error: 'Erro ao ataulizar dados do servidor'})
    }
}

export async function buscarServidorPorId(req, res) {
    try {
        const id = req.params.id;
        const resultado = await servidoresService.buscarServidorPorId(id);
        if (!resultado) {
            return res.status(404).json({ message: 'Servidor não encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar servidor por ID' });
    }
}

export async function buscarServidorPorEmpresa(req, res) {
    try {
        const empresaId = req.params.empresaId;
        const resultado = await servidoresService.buscarServidorPorEmpresa(empresaId);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar servidores por empresa' });
    }
}