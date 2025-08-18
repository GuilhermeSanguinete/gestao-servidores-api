import * as servidoresRepository from '../repositories/servidoresRepository.js';
import * as servidoresValidation from '../validations/servidoresValidation.js'

export async function listarServidores() {
    return await servidoresRepository.listarServidores();
}

export async function cadastrarServidor(servidor) {
    servidoresValidation.validarServidor(servidor);
    return await servidoresRepository.cadastrarServidor(servidor);
}

export async function deletarServidor(id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('ID inválido para deletar servidor');
    }
    return await servidoresRepository.deletarServidor(id);    
}

export async function atualizarServidor(servidor) {
    if (!servidor.id || isNaN(Number(servidor.id))) {
        throw new Error('ID do servidor é obrigatório para atualização');
    }
    servidoresValidation.validarServidor(servidor);
    return await servidoresRepository.atualizarServidor(servidor);
}

export async function buscarServidorPorId(id) {
    if (!id || isNaN(Number(id))) {
        throw new Error('ID inválido para busca de servidor');
    }
    return await servidoresRepository.buscarServidorPorId(id);
}

export async function buscarServidorPorEmpresa(empresaId) {
    if (!empresaId || isNaN(Number(empresaId))) {
        throw new Error('ID da empresa inválido');
    }
    return await servidoresRepository.buscarServidorPorEmpresa(empresaId);
}
