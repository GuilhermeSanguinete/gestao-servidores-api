import * as servidoresRepository from '../repositories/servidoresRepository.js';

export async function getServidores() {
    const resultado = await servidoresRepository.getServidores();
    return resultado;
}