import * as empresaRepository from '../repositories/empresaRepository.js';

export async function listaTodasEmpresas() {
    const empresas = await empresaRepository.getListaEmpresas();
    return empresas;
}