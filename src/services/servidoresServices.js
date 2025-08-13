import * as servidoresRepository from '../repositories/servidoresRepository.js';

export async function listarServidores() {
    const resultado = await servidoresRepository.listarServidores();
    return resultado;
}

export async function cadastrarServidor(servidor) {
    const resultado = await servidoresRepository.cadastrarServidor(servidor);
    return resultado;
}

export async function deletarServidor(id) {
    const resultado = await servidoresRepository.deletarServidor(id);
    return resultado;    
}

export async function atualizarServidor(servidor) {
    const resultado = await servidoresRepository.atualizarServidor(servidor);
    return resultado;
}

export async function buscarServidorPorId(id) {
    return await servidoresRepository.buscarServidorPorId(id);
}

export async function buscarServidorPorEmpresa(empresaId) {
    return await servidoresRepository.buscarServidorPorEmpresa(empresaId);
}