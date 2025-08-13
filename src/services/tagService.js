import * as tagRepository from '../repositories/tagRepository.js';
import * as empresaRepository from '../repositories/empresaRepository.js';
import { validarNomeObrigatorio } from '../validations/tagValidation.js';

function criarErro(statusCode, mensagem) {
    const err = new Error(mensagem);
    err.statusCode = statusCode;
    return err;
}

export async function listarTags() {
    return await tagRepository.listarTags();
}

export async function criarTag(nome) {
    validarNomeObrigatorio(nome);

    const jaExiste = await tagRepository.buscarTagPorNome(nome);
    if (jaExiste.length > 0) {
        throw criarErro(400, 'Nome da tag já existente');
    }

    return await tagRepository.criarTag(nome);
}

export async function atualizarTag(id, nome) {
    validarNomeObrigatorio(nome);

    const tagExistente = await tagRepository.buscarTagPorId(id);
    if (tagExistente.length === 0) {
        throw criarErro(404, `Não foi encontrada tag com id: ${id}`);
    }

    const nomeJaExiste = await tagRepository.buscarTagPorNome(nome);
    if (nomeJaExiste.length > 0 && nomeJaExiste[0].id !== id) {
        throw criarErro(400, 'Nome da tag já existente');
    }

    return await tagRepository.atualizarTag(id, nome);
}

export async function buscarTagPorId(id) {
    return await tagRepository.buscarTagPorId(id);
}

export async function buscarTagPorNome(nome) {
    return await tagRepository.buscarTagPorNome(nome);
}

export async function deletarTag(id) {
    const tagExistente = await tagRepository.buscarTagPorId(id);
    if (tagExistente.length === 0) {
        throw criarErro(404, `Não foi encontrada tag com id: ${id}`);
    }

    const existeEmpresa = await empresaRepository.buscarEmpresasPorSetor(id);
    if (existeEmpresa.length > 0) {
        throw criarErro(400, 'Não é possível excluir esta tag, pois há empresas cadastradas com esta');
    }

    return await tagRepository.deletarTag(id);
}