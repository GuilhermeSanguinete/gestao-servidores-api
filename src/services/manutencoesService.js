import * as manutencoesRepository  from '../repositories/manutencoesRepository.js';

export async function listarManutencoes() {
    return await manutencoesRepository.listarManutencoes(); 
}

export async function cadastrarManutencao(manutencao) {
    if (!manutencao.servidor_id || !manutencao.descricao || !manutencao.data) {
        throw new Error("Campos obrigatórios: servidor_id, descricao, data");
    }

    const resultado = await manutencoesRepository.cadastrarManutencao(manutencao);
    return resultado;
}