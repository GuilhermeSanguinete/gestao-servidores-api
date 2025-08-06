import * as servidoresRepository from '../repositories/servidoresRepository.js';

export async function getServidores() {
    const resultado = await servidoresRepository.getServidores();
    return resultado;
}

export async function postServidores(servidor) {
    const resultado = await servidoresRepository.postServidores(servidor);
    return resultado;
}

export async function deleteServidores(id) {
    const resultado = await servidoresRepository.deleteServidores(id);
    return resultado;    
}