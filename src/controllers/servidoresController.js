import * as servidoresSerice from '../services/servidoresServices.js';

export async function getServidores(req, res) {
    try{
        const resultado = await servidoresSerice.getServidores();
        res.status(200).json(resultado);
    }
    catch{
        res.status(500).json({ message: 'Erro ao consultar servidores '});
    }
}