import * as servidoresSerice from '../services/servidoresServices.js';

export async function getServidores(req, res) {
    try {
        const resultado = await servidoresSerice.getServidores();
        res.status(200).json(resultado);
    }
    catch {
        res.status(500).json({ message: 'Erro ao consultar servidores ' });
    }
}

export async function postServidores(req, res) {
    try {
        const servidor = req.body;
        const resultado = await servidoresSerice.postServidores(servidor);
        res.status(201).json(resultado);
    }
    catch{
        res.status(500).json({ message: 'Erro ao cadastrar novo servidor '});
    }
}