import * as manutencoesRepository  from '../repositories/manutencoesRepository.js';

export async function listarManutencoes() {
    return await manutencoesRepository.listarManutencoes(); 
}