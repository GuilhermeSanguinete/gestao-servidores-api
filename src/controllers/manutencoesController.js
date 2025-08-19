import * as manutencoesService from '../services/manutencoesService.js';

export async function listarManutencoes(req, res) {
    try {
        const manutencoes = await manutencoesService.listarManutencoes();
        res.status(200).json(manutencoes);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao listar manutenções' })
    }
}