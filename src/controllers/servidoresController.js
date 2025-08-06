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
