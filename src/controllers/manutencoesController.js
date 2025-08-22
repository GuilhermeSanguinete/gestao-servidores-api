import * as manutencoesService from '../services/manutencoesService.js';

export async function listarManutencoes(req, res) {
    try {
        const manutencoes = await manutencoesService.listarManutencoes();
        res.status(200).json(manutencoes);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao listar manutenções' });
    }
}

export async function cadastrarManutencao(req, res) {
    try {
        const manutencao = req.body;
        const novaManutencao = await manutencoesService.cadastrarManutencao(manutencao);
        res.status(201).json(novaManutencao);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}