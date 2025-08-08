import * as servidoresSerice from '../services/servidoresServices.js';

export async function getServidores(req, res) {
    try {
        const resultado = await servidoresSerice.getServidores();
        res.status(200).json(resultado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao consultar servidores ' });
    }
}

export async function postServidores(req, res) {
    try {
        const servidor = req.body;
        const resultado = await servidoresSerice.postServidores(servidor);
        res.status(201).json(resultado);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar novo servidor ' });
    }
}

export async function deleteServidores(req, res) {
    try {
        const id = req.body.id;
        const resultado = await servidoresSerice.deleteServidores(id);
        res.status(200).json({ message: 'Servidor deletado com sucesso ' });
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar servidor.'})
    }
}

export async function putServidores(req, res) {
    try{
        const empresa = req.body;
        await servidoresSerice.putServidores(empresa);
        res.status(200).json({ message: 'Servidor atualizado com sucesso '});
    }
    catch (error) {
        res.status(500).json({error: 'Erro ao ataulizar dados do servidor'})
    }
}

export async function getServidorById(req, res) {
    try {
        const id = req.params.id;
        const resultado = await servidoresSerice.getServidorById(id);
        if (!resultado) {
            return res.status(404).json({ message: 'Servidor não encontrado' });
        }
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar servidor por ID' });
    }
}

export async function getServidoresByEmpresa(req, res) {
    try {
        const empresaId = req.params.empresaId;
        const resultado = await servidoresSerice.getServidoresByEmpresa(empresaId);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar servidores por empresa' });
    }
}